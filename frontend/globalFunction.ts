import axios from "axios";
import { BACKEND_URL } from "config";
import dayjs from "dayjs";

export function justifyText(text: string) {
  const textArr = text.split("");
  let result = "";
  const spanning = textArr.map((txt) => `<span>${txt}</span>`);
  spanning.map((t) => (result += t));
  return `<p style="padding-left:50px; padding-right:60px;width:100%;display:flex; justify-content:space-between;">${result}</p>`;
}

export function checkPremium(me) {
  if (!me) {
    alert("회원가입 후 이용 가능합니다.");
    return false;
  }
  if (dayjs(me.userInfo.premiumExprierdAt).toDate() < new Date()) {
    alert("이용권 구매 후 이용 가능합니다.");
    return false;
  }

  return true;
}
// export function rowsToMaterialJSON(rows) {
//   const copy = rows.slice();
//   return copy.map((item) => {
//     return {
//       rowKey: item.rowKey,
//       floor: item.floor,
//       room: item.room,
//       section: item.section,
//       part: item.part,
//       gubun: "마감",
//       mKey: "5d6beadb-8eda-4864-af3f-ed5a8f092982",
//       참조: "",
//       상세: "",
//     };
//   })

// }

export function getFeedbackScore(score) {
  switch (score) {
    case 1:
      return "매우만족";
    case 2:
      return "만족";
    case 3:
      return "보통";
    case 4:
      return "불만족";
    case 5:
      return "매우불만족";
  }
}
export function dateFormet(a: any) {
  var time = a; // 'hh:mm' 형태로 값이 들어온다
  var getTime = time.substring(0, 2); // 시간(hh)부분만 저장
  var intTime = parseInt(getTime); // int형으로 변환
  var str = "";
  var cvHour;
  if (intTime < 12) {
    // intTime이 12보다 작으면
    str = "오전 "; // '오전' 출력
  } else {
    // 12보다 크면
    str = "오후 "; // '오후 출력'
  } // intTime이 12면 변환 후 그대로 12
  if (intTime === 12) {
    cvHour = intTime;
  } // 나머지경우엔 intTime을 12로 나눈 나머지값이 변환 후 시간이 된다
  else {
    cvHour = intTime % 12;
  } // 'hh:mm'형태로 만들기
  var res = str + ("0" + cvHour).slice(-2) + time.slice(-3); // return
  return res;
}

// base64 URL을 넣으면 이미지서버에 업로드 후에 받아온 실제 이미지URL로 변경해준다. (S3용 아님)
// export const base64ImageUpload = (dataURL: any, thumbnail?: boolean) => {
//   return new Promise(function (resolve, reject) {
//     axios
//       // .post(MEDIA_SERVER_URL, {
//       .post(BACKEND_URL + '/s3/upload', {
//         data: dataURL,
//         thumbnail,
//       })
//       .then((res: any) => {
//         if (thumbnail) {
//           resolve(res.data.thumbnail);
//         } else {
//           resolve(res.data.fileName);
//         }
//       })
//       .catch((err: any) => {
//         reject(err);
//       });
//   });
// };

export const base64ImageUpload = (dataURL: any, thumbnail?: boolean) => {
  console.log(thumbnail);
  return new Promise(function (resolve, reject) {
    axios
      // .post(MEDIA_SERVER_URL, {
      .post(BACKEND_URL + "/s3/upload", {
        data: [dataURL],
        extension: ["png"],
      })
      .then((res: any) => {
        resolve(res.data.fileName);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

// 에디터에 입력된 이미지들을 추출해서 AWS S3로 업로드 후에 치환해서 리턴
export const convertEditorUploadImages = async (content: string) => {
  let contentTemp;
  let changeContent = content;
  contentTemp = content;
  const images = contentTemp.match(
    /<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/g
  );
  if (images) {
    if (images.length > 0) {
      for (var i = 0; i < images.length; i++) {
        const original = images[i];
        let generate = original.replace('<img src="', "");
        let base64ImageUrl = generate.replace('">', "");

        // base64일때만 실행
        if (base64ImageUrl.length > 10000) {
          // console.log('GEN', base64ImageUrl);
          const uploadedImgURL = await base64ImageUpload(base64ImageUrl);

          changeContent = contentTemp.replace(
            base64ImageUrl,
            uploadedImgURL.toString()
          );
        }
        contentTemp = changeContent;
      }
    }
  }

  return contentTemp;
};

export const fetcher = async (url: string) => {
  const resp = await axios.get(url);
  return resp.data;
};

export const xlsxUpload = (data: any, extension?: string) => {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    // // Base64 인코딩
    reader.readAsDataURL(data[0]);
    reader.onload = function () {
      const dataURL = reader.result;
      axios
        .post(BACKEND_URL + "/s3/upload-xlsx", {
          data: [dataURL],
          extension: extension ? [extension] : ["xlsx"],
          thumbnail: false,
        })
        .then((res: any) => {
          resolve([res.data]);
        });
    };
  });
};

export const promiseUpload = (data: any, extension?: string) => {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    // // Base64 인코딩
    reader.readAsDataURL(data[0]);
    reader.onload = function () {
      const dataURL = reader.result;
      axios
        .post(BACKEND_URL + "/s3/upload", {
          data: [dataURL],
          extension: extension ? [extension] : ["png"],
          thumbnail: false,
        })
        .then((res: any) => {
          resolve([res.data]);
        });
    };
  });
};

export const promiseUploadLocal = (data: any, extension?: string) => {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    // // Base64 인코딩
    reader.readAsDataURL(data[0]);
    reader.onload = function () {
      const dataURL = reader.result;
      axios
        .post(BACKEND_URL + "/s3/upload-local", {
          data: [dataURL],
          extension: extension ? [extension] : ["png"],
          thumbnail: false,
        })
        .then((res: any) => {
          resolve(res.data);
        });
    };
  });
};

export const getFileBuffer = (data: any) => {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    // // Base64 인코딩
    reader.readAsDataURL(data[0]);
    reader.onload = function () {
      const dataURL = reader.result;
      resolve(dataURL);
    };
  });
};

export function numberWithCommas(x) {
  // return typeof Number(x);
  const two = Math.floor(Number(x));
  // return two;
  return String(two).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getMediaType(extension) {
  switch (extension) {
    case "png":
      return 0;
    case "jpg":
      return 0;
    case "jpeg":
      return 0;
    case "gif":
      return 0;
    case "bmp":
      return 0;
    case "mp4":
      return 1;
    case "mov":
      return 1;
    case "wmv":
      return 1;
    case "avi":
      return 1;
    default:
      return 0;
  }
}
