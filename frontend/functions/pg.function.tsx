import { BACKEND_URL, IMP_Code } from "config";
import customAxios from "util/axios";
import * as uuid from "uuid";

type MyWindow = typeof window & {
  init: any;
  request_pay: any;
  IMP: any;
};

export const goPay = async (
  pay_method: any,
  amount: any,
  Product_name: any,
  buyer_name: any,
  buyer_tel: any,
  buyer_email: any,
  productKey: string,
  userId: string
  // reqData: any
) => {
  // setBg(true);
  // const IMP_Code = "imp86361974";
  const IMP = window as MyWindow; // 생략해도 괜찮습니다.
  const odId = uuid.v4();
  // const { IMP } = window;
  IMP.IMP.init(IMP_Code); // 'imp00000000' 대신 발급받은 가맹점 식별코드를 사용합니다.

  // 주문번호 생성

  let pg = "";
  if (pay_method === "phone") {
    // pg = "danal";
    pg = "html5_inicis";
  } else {
    // pg = "danal_tpay";
    pg = "html5_inicis";
  }

  const payData = {
    pg, // PG사
    merchant_uid: odId, // 주문번호
    pay_method: pay_method,
    amount: amount,
    name: Product_name,
    buyer_name: buyer_name,
    buyer_tel: buyer_tel,
    buyer_email: buyer_email,
    popup: true,
    biz_num: "7458602371",
    m_redirect_url: `/payment/receip?odId=${odId}`,
  };

  const reqBody = {
    pg,
    odId,
    productKey,
    userId,
    payMethod: pay_method,
  };
  // IMP.IMP.request_pay(payData, callback);
  customAxios.post(BACKEND_URL + "/payment/order", reqBody).then((res) => {
    if (res) {
      IMP.IMP.request_pay(payData, callback);
    }
  });

  // // 준비 상태로 결제정보 INSERT
  // await customAxios.post(BACKEND_URL + '/api/ready/order', {
  //   od_id: od_id,
  //   user_id: 'userID',
  //   item_name: Product_name,
  //   quantity: 1,
  //   total_amount: amount,
  //   pg: 'danal',
  //   pay_method: pay_method,
  //   currency: 'KRW',
  // });
};

const callback = (response: any) => {
  const { success, merchant_uid, error_msg } = response;

  console.log("결제 response", response);

  // setBg(false);
  console.log(merchant_uid);
  if (success) {
    // axios로 HTTP 요청
    customAxios({
      url: BACKEND_URL + "/payment/complete", // 가맹점 서버
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: {
        imp_uid: response.imp_uid,
        merchant_uid: response.merchant_uid,
      },
    }).then((res) => {
      // 가맹점 서버 결제 API 성공시 로직
      console.log(res);
      if (res.data.status === "success") {
        window.location.href = `/payment/receip?odId=${response.merchant_uid}`;
      } else {
        alert("결제 처리에 실패했습니다. 고객센터에 문의해주세요.");
        return;
      }
      // if (data.status === 200) {
      //   if (payMethod !== 'vbank') {
      //     if (redirectMode) {
      //       if (redirectMode === 'pictorial') {
      //         if (redirectPictorialKey) {
      //           window.location.href = `/pictorial?pictorial_key=${redirectPictorialKey}`;
      //           return;
      //         }
      //       }
      //       if (redirectMode === 'model') {
      //         if (redirectModelKey) {
      //           window.location.href = `/model?model_key=${redirectModelKey}`;
      //           return;
      //         }
      //       }
      //     }

      //     // 가상계좌를 제외한 모든 결제수단
      //     window.location.href = `/charge/success_danal?pay_prc=${payPrc}&pay_coin=${payCoin}&pay_method=${payMethod}&od_id=${merchant_uid}`;
      //   } else {
      //     // 가상계좌 결제
      //     window.location.href = `/charge/success_danal?pay_prc=${payPrc}&pay_coin=${payCoin}&pay_method=${payMethod}&od_id=${merchant_uid}&vbank_name=${response.vbank_name}&vbank_num=${response.vbank_num}&vbank_date=${response.vbank_date}&vbank_holder=${response.vbank_holder}`;
      //   }
      // }
    });
    // }
  } else {
    alert(`결제 실패: ${error_msg}`);
    // setBg(false);
  }
};
