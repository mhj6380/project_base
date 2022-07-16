import { saveAs } from "file-saver";
import { numberWithCommas } from "globalFunction";
import * as XLSX from "sheetjs-style";

export function exelDownloadBadchForm() {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = "xlsx";

  const workSheetData = [
    { id: 1, name: "Daniel", age: "20", sex: "M" },
    { id: 2, name: "Kim", age: "30", sex: "M" },
    { id: 3, name: "Lee", age: "33", sex: "M" },
    { id: 4, name: "Min", age: "50", sex: "F" },
    { id: 5, name: "Yun", age: "20", sex: "F" },
  ];

  const workSheet = XLSX.utils.json_to_sheet(workSheetData, {
    header: ["id", "name", "age", "sex"],
  });

  workSheet["!autofilter"] = { ref: "A1:R11" };

  // *****************    갑지 START

  // *****************    갑지 END

  // ws["A1"].s = {
  //   fill: {
  //     bgColor: "FFFFAA00",
  //   },
  // };

  const wb = {
    Sheets: {
      품목일괄등록: get품목일괄등록ws(),
    },
    SheetNames: [`품목일괄등록`],
  };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  const data = new Blob([excelBuffer], { type: fileType });
  saveAs(data, `${"일괄등록폼"}${fileExtension}`);
}

const get품목일괄등록ws = () => {
  const 품목일괄등록wsData = [
    {
      품목명: "",
      부위: "바닥|천장|벽체|공통|기타",
      규격: "",
      단위: "",
      품목타입: "마감|바탕",
      재료단가: "",
      노무단가: "",
      경비단가: "",
      공종: "공종 Key값으로 입력",
    },
  ];

  const 품목일괄등록ws = XLSX.utils.json_to_sheet(품목일괄등록wsData);

  // const 품목일괄등록merge = [
  //   { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
  //   // { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
  // ];
  var 품목일괄등록cols = [
    { width: 30 },
    { width: 30 },
    { width: 20 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
  ];

  for (var i in 품목일괄등록ws) {
    if (typeof 품목일괄등록ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    품목일괄등록ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      품목일괄등록ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      품목일괄등록ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      품목일괄등록ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      품목일괄등록ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
      품목일괄등록ws[i].s.fill = {
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }

  품목일괄등록ws["!autofilter"] = { ref: "A1:G1000" };
  // 품목일괄등록ws["!merges"] = 품목일괄등록merge;
  품목일괄등록ws["!cols"] = 품목일괄등록cols;
  품목일괄등록ws["!rows"] = Object.entries(품목일괄등록ws).map(() => {
    return { hpx: 30 };
  });

  return 품목일괄등록ws;
};

// 프로젝트 등록화면 엑셀다운
export function exelDownloadProjectForm(rows, materialList, projectTitle) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = "";

  const workSheetData = [
    { id: 1, name: "Daniel", age: "20", sex: "M" },
    { id: 2, name: "Kim", age: "30", sex: "M" },
    { id: 3, name: "Lee", age: "33", sex: "M" },
    { id: 4, name: "Min", age: "50", sex: "F" },
    { id: 5, name: "Yun", age: "20", sex: "F" },
  ];

  const workSheet = XLSX.utils.json_to_sheet(workSheetData, {
    header: ["id", "name", "age", "sex"],
  });

  workSheet["!autofilter"] = { ref: "A1:R11" };

  const wb = {
    Sheets: {
      마감등록: get마감등록ws(rows, materialList),
      공통등록: get공통등록ws(rows, materialList),
    },
    SheetNames: [`마감등록`, `공통등록`],
  };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  const data = new Blob([excelBuffer], { type: fileType });
  saveAs(data, `${projectTitle}${fileExtension}`);
}

// 프로젝트 내역서 엑셀다운
export function exelDownloadProject(
  projectTitle: string,
  reportVariables: any,
  rows: any,
  projectInfo: any
) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = "";

  const workSheetData = [
    { id: 1, name: "Daniel", age: "20", sex: "M" },
    { id: 2, name: "Kim", age: "30", sex: "M" },
    { id: 3, name: "Lee", age: "33", sex: "M" },
    { id: 4, name: "Min", age: "50", sex: "F" },
    { id: 5, name: "Yun", age: "20", sex: "F" },
  ];

  const workSheet = XLSX.utils.json_to_sheet(workSheetData, {
    header: ["id", "name", "age", "sex"],
  });

  workSheet["!autofilter"] = { ref: "A1:R11" };

  // *****************    갑지 START

  // *****************    갑지 END

  // ws["A1"].s = {
  //   fill: {
  //     bgColor: "FFFFAA00",
  //   },
  // };

  const wb = {
    Sheets: {
      공종별보기: get공종별보기ws(rows),
      품목별보기: get품목별보기ws(rows),
      부위별보기: get부위별보기ws(rows),
      갑지: get갑지ws(projectInfo),
      원가계산서: get원가계산서ws(reportVariables),
      총괄집계표: get총괄집계표ws(rows),
      내역서: get내역서ws(rows),
    },
    SheetNames: [
      `공종별보기`,
      `품목별보기`,
      `부위별보기`,
      `갑지`,
      `원가계산서`,
      `총괄집계표`,
      `내역서`,
    ],
  };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  const data = new Blob([excelBuffer], { type: fileType });
  saveAs(data, `${projectTitle}${fileExtension}`);
}

const get마감등록ws = (rows, materialList) => {
  const data = [];

  // const filterdCommonFloorList = rows.filter(
  //   (floor) => floor.isCommon === true
  // );
  const filterdMaterialFloorList = rows.filter(
    (floor) => floor.isCommon === false
  );

  const refBaseToString = (refBase) => {
    if (!refBase) return "";

    let result = "";
    const bs = refBase.split("|");
    for (var m = 0; m < bs.length; m++) {
      const it = bs[m];
      if (bs.length - 1 === m) {
        result += materialList[it].title;
      } else {
        result += materialList[it].title + "/";
      }
    }

    return result;
  };

  for (var j = 0; j < filterdMaterialFloorList.length; j++) {
    const floor = filterdMaterialFloorList[j];
    for (var k = 0; k < floor.children.length; k++) {
      const room = floor.children[k];
      for (var l = 0; l < room.children.length; l++) {
        const section = room.children[l];
        // alert(JSON.stringify(section));
        // console.log(section);

        data.push({
          "1구분": floor.floor,
          "2구분": room.room,
          "3구분": section.section,
          비닥마감:
            section.floorReference.refFinish &&
            materialList[section.floorReference.refFinish].title,
          비닥바탕: refBaseToString(section.floorReference.refBase),
          비닥스펙: section.floorReference.refThicknessTitle,
          비닥상세: section.floorReference.refDetailTitle,
          벽체마감:
            section.wallReference.refFinish &&
            materialList[section.wallReference.refFinish].title,
          벽체바탕: refBaseToString(section.wallReference.refBase),
          벽체스펙: section.wallReference.refThicknessTitle,
          벽체상세: section.wallReference.refDetailTitle,
          천장마감:
            section.ceilingReference.refFinish &&
            materialList[section.ceilingReference.refFinish].title,
          천장바탕: refBaseToString(section.ceilingReference.refBase),
          천장스펙: section.ceilingReference.refThicknessTitle,
          천장상세: section.ceilingReference.refDetailTitle,
          기타마감:
            section.etcReference.refFinish &&
            materialList[section.etcReference.refFinish].title,
          기타바탕: refBaseToString(section.etcReference.refBase),
          기타스펙: section.etcReference.refThicknessTitle,
          기타상세: section.etcReference.refDetailTitle,
        });
      }
    }
  }

  const 마감등록ws = XLSX.utils.json_to_sheet(data);

  var 마감등록cols = [
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 50 },
    { width: 100 },
    { width: 20 },
    { width: 20 },
    { width: 50 },
    { width: 100 },
    { width: 20 },
    { width: 20 },
    { width: 50 },
    { width: 100 },
    { width: 20 },
    { width: 20 },
    { width: 50 },
    { width: 100 },
    { width: 20 },
    { width: 20 },
  ];

  for (var i in 마감등록ws) {
    if (typeof 마감등록ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    마감등록ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      마감등록ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      마감등록ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      마감등록ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      마감등록ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
      마감등록ws[i].s.fill = {
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }

  마감등록ws["!autofilter"] = { ref: "A1:S1000" };
  // 마감등록ws["!merges"] = 마감등록merge;
  마감등록ws["!cols"] = 마감등록cols;
  마감등록ws["!rows"] = Object.entries(마감등록ws).map(() => {
    return { hpx: 30 };
  });

  return 마감등록ws;
};
const get공통등록ws = (rows, materialList) => {
  const data = [];

  const refBaseToString = (refBase) => {
    if (!refBase) return "";

    let result = "";
    const bs = refBase.split("|");
    for (var m = 0; m < bs.length; m++) {
      const it = bs[m];
      if (bs.length - 1 === m) {
        result += materialList[it].title;
      } else {
        result += materialList[it].title + "/";
      }
    }

    return result;
  };

  const filterdCommonFloorList = rows.filter(
    (floor) => floor.isCommon === true
  );
  // const filterdMaterialFloorList = rows.filter(
  //   (floor) => floor.isCommon === false
  // );

  for (var j = 0; j < filterdCommonFloorList.length; j++) {
    const floor = filterdCommonFloorList[j];
    for (var k = 0; k < floor.children.length; k++) {
      const room = floor.children[k];
      for (var l = 0; l < room.children.length; l++) {
        const section = room.children[l];
        // alert(JSON.stringify(section));
        // console.log(section);

        data.push({
          "1구분": floor.floor,
          "2구분": room.room,
          "3구분": section.section,
          공통마감:
            section.commonReference.refFinish &&
            materialList[section.commonReference.refFinish].title,
          공통바탕: refBaseToString(section.commonReference.refBase),
          공통스펙: section.commonReference.refThicknessTitle,
          공통상세: section.commonReference.refDetailTitle,
        });
      }
    }
  }

  const 공통등록ws = XLSX.utils.json_to_sheet(data);

  var 마감등록cols = [
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 50 },
    { width: 100 },
    { width: 20 },
    { width: 20 },
  ];

  for (var i in 공통등록ws) {
    if (typeof 공통등록ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    공통등록ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      공통등록ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      공통등록ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      공통등록ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      공통등록ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
      공통등록ws[i].s.fill = {
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }

  공통등록ws["!autofilter"] = { ref: "A1:G1000" };
  // 공통등록ws["!merges"] = 마감등록merge;
  공통등록ws["!cols"] = 마감등록cols;
  공통등록ws["!rows"] = Object.entries(공통등록ws).map(() => {
    return { hpx: 30 };
  });

  return 공통등록ws;
};
const get공종별보기ws = (rows) => {
  const 공종별보기wsData = rows.map((item) => {
    return {
      공종명: item.materialConstructionType,
      "1구분": item.floor,
      "2구분": item.room,
      "3구분": item.section,
      부위: item.part,
      // 구분: item.gubun,
      품목: item.materialTitle,
      규격: item.materialStandard,
      단위: item.materialUnit,
      수량: numberWithCommas(item.qty),
      재료단가: numberWithCommas(item.materialAmount),
      재료금액: numberWithCommas(item.materialAmount * item.qty),
      노무단가: numberWithCommas(item.materialNomuAmount),
      노무금액: numberWithCommas(item.materialNomuAmount * item.qty),
      경비단가: numberWithCommas(item.materialExpenseAmount),
      경비금액: numberWithCommas(item.materialExpenseAmount * item.qty),
      합계단가: numberWithCommas(item.materialTotalAmount),
      합계금액: numberWithCommas(item.materialTotalAmount * item.qty),
      비고: item.bigo,
    };
  });

  const 공종별보기ws = XLSX.utils.json_to_sheet(공종별보기wsData);

  // const 공종별보기merge = [
  //   { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
  //   // { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
  // ];
  var 공종별보기cols = [
    { width: 30 },
    { width: 15 },
    { width: 20 },
    { width: 10 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
  ];

  for (var i in 공종별보기ws) {
    if (typeof 공종별보기ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    공종별보기ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      공종별보기ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      공종별보기ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      공종별보기ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      공종별보기ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
      공종별보기ws[i].s.fill = {
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }

  공종별보기ws["!autofilter"] = { ref: "A1:G1000" };
  // 공종별보기ws["!merges"] = 공종별보기merge;
  공종별보기ws["!cols"] = 공종별보기cols;
  공종별보기ws["!rows"] = Object.entries(공종별보기ws).map(() => {
    return { hpx: 30 };
  });

  return 공종별보기ws;
};

const get품목별보기ws = (rows) => {
  const 품목별보기wsData = rows.map((item) => {
    return {
      품목: item.materialTitle,
      규격: item.materialStandard,
      "1구분": item.floor,
      "2구분": item.room,
      "3구분": item.section,
      부위: item.part,
      단위: item.materialUnit,
      // 공종명: item.materialTitle,
      // 구분: item.gubun,
      수량: numberWithCommas(item.qty),
      재료단가: numberWithCommas(item.materialAmount),
      재료금액: numberWithCommas(item.materialAmount * item.qty),
      노무단가: numberWithCommas(item.materialNomuAmount),
      노무금액: numberWithCommas(item.materialNomuAmount * item.qty),
      경비단가: numberWithCommas(item.materialExpenseAmount),
      경비금액: numberWithCommas(item.materialExpenseAmount * item.qty),
      합계단가: numberWithCommas(item.materialTotalAmount),
      합계금액: numberWithCommas(item.materialTotalAmount * item.qty),
      비고: item.bigo,
    };
  });

  const 품목별보기ws = XLSX.utils.json_to_sheet(품목별보기wsData);

  // const 품목별보기merge = [
  //   { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
  //   // { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
  // ];
  var 품목별보기cols = [
    { width: 30 },
    { width: 15 },
    { width: 20 },
    { width: 10 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
  ];

  for (var i in 품목별보기ws) {
    if (typeof 품목별보기ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    품목별보기ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      품목별보기ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      품목별보기ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      품목별보기ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      품목별보기ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
      품목별보기ws[i].s.fill = {
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }

  품목별보기ws["!autofilter"] = { ref: "A1:G1000" };
  // 품목별보기ws["!merges"] = 품목별보기merge;
  품목별보기ws["!cols"] = 품목별보기cols;
  품목별보기ws["!rows"] = Object.entries(품목별보기ws).map(() => {
    return { hpx: 30 };
  });

  return 품목별보기ws;
};

const get부위별보기ws = (rows) => {
  const 부위별보기wsData = rows.map((item) => {
    return {
      "1구분": item.floor,
      "2구분": item.room,
      "3구분": item.section,
      부위: item.part,
      // 구분: item.gubun,
      품목: item.materialTitle,
      // 공종명: item.materialTitle,
      규격: item.materialStandard,
      단위: item.materialUnit,
      수량: numberWithCommas(item.qty),
      재료단가: numberWithCommas(item.materialAmount),
      재료금액: numberWithCommas(item.materialAmount * item.qty),
      노무단가: numberWithCommas(item.materialNomuAmount),
      노무금액: numberWithCommas(item.materialNomuAmount * item.qty),
      경비단가: numberWithCommas(item.materialExpenseAmount),
      경비금액: numberWithCommas(item.materialExpenseAmount * item.qty),
      합계단가: numberWithCommas(item.materialTotalAmount),
      합계금액: numberWithCommas(item.materialTotalAmount * item.qty),
      비고: item.bigo,
    };
  });

  const 부위별보기ws = XLSX.utils.json_to_sheet(부위별보기wsData);

  // const 부위별보기merge = [
  //   { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
  //   // { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
  // ];
  var 부위별보기cols = [
    { width: 30 },
    { width: 15 },
    { width: 20 },
    { width: 10 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
  ];

  for (var i in 부위별보기ws) {
    if (typeof 부위별보기ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    부위별보기ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      부위별보기ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      부위별보기ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      부위별보기ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      부위별보기ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
      부위별보기ws[i].s.fill = {
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }

  부위별보기ws["!autofilter"] = { ref: "A1:G1000" };
  // 부위별보기ws["!merges"] = 부위별보기merge;
  부위별보기ws["!cols"] = 부위별보기cols;
  부위별보기ws["!rows"] = Object.entries(부위별보기ws).map(() => {
    return { hpx: 30 };
  });

  return 부위별보기ws;
};

const get총괄집계표ws = (rows) => {
  const arr = [];
  const initKeys = [];
  const groupBy = (array) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      if (initKeys.includes(currentValue.materialConstructionType)) {
        const targetIdx = arr.findIndex(
          (it) =>
            it.materialConstructionType ===
            currentValue.materialConstructionType
        );

        arr[targetIdx].materialAmount += Number(currentValue.materialAmount);
        arr[targetIdx].materialNomuAmount += Number(
          currentValue.materialNomuAmount
        );
        arr[targetIdx].materialExpenseAmount += Number(
          currentValue.materialExpenseAmount
        );
        arr[targetIdx].materialTotalAmount += Number(
          currentValue.materialTotalAmount
        );

        arr[targetIdx].AmtMaterialAmount +=
          currentValue.materialAmount * Number(currentValue.materialQty);
        arr[targetIdx].AmtMaterialNomuAmount +=
          currentValue.materialNomuAmount * Number(currentValue.materialQty);
        arr[targetIdx].AmtMaterialExpenseAmount +=
          currentValue.materialExpenseAmount * Number(currentValue.materialQty);
        arr[targetIdx].AmtMaterialTotalAmount +=
          currentValue.materialTotalAmount * Number(currentValue.materialQty);
      } else {
        // console.log(currentValue.materialTotalAmount);
        arr.push({
          ...currentValue,
          materialAmount: Number(currentValue.materialAmount),
          materialNomuAmount: Number(currentValue.materialNomuAmount),
          materialExpenseAmount: Number(currentValue.materialExpenseAmount),
          materialTotalAmount: Number(currentValue.materialTotalAmount),
          AmtMaterialAmount:
            Number(currentValue.materialAmount) *
            Number(currentValue.materialQty),
          AmtMaterialNomuAmount:
            Number(currentValue.materialNomuAmount) *
            Number(currentValue.materialQty),
          AmtMaterialExpenseAmount:
            Number(currentValue.materialExpenseAmount) *
            Number(currentValue.materialQty),
          AmtMaterialTotalAmount:
            Number(currentValue.materialTotalAmount) *
            Number(currentValue.materialQty),
        });
        initKeys.push(currentValue.materialConstructionType);
      }

      return result;
    }, {}); // empty object is the initial value for result object
  };

  groupBy(rows);

  const initialValue = {
    materialAmount: 0,
    materialNomuAmount: 0,
    materialExpenseAmount: 0,
    materialTotalAmount: 0,
    AmtMaterialAmount: 0,
    AmtMaterialNomuAmount: 0,
    AmtMaterialExpenseAmount: 0,
    AmtMaterialTotalAmount: 0,
  };
  // const total = arr.reduce(
  //   (previousValue, currentValue) =>
  //     previousValue.materialAmount + currentValue.materialAmount,
  //   initialValue
  // );
  const total = arr.reduce((previousValue, currentValue) => {
    return {
      rowsKey: "total",
      materialConstructionType: "총계",
      materialAmount:
        previousValue.materialAmount + currentValue.materialAmount,
      materialNomuAmount:
        previousValue.materialNomuAmount + currentValue.materialNomuAmount,
      materialExpenseAmount:
        previousValue.materialExpenseAmount +
        currentValue.materialExpenseAmount,
      materialTotalAmount:
        previousValue.materialTotalAmount + currentValue.materialTotalAmount,
      AmtMaterialAmount:
        previousValue.AmtMaterialAmount + currentValue.AmtMaterialAmount,
      AmtMaterialNomuAmount:
        previousValue.AmtMaterialNomuAmount +
        currentValue.AmtMaterialNomuAmount,
      AmtMaterialExpenseAmount:
        previousValue.AmtMaterialExpenseAmount +
        currentValue.AmtMaterialExpenseAmount,
      AmtMaterialTotalAmount:
        previousValue.AmtMaterialTotalAmount +
        currentValue.AmtMaterialTotalAmount,
    };
  }, initialValue);

  arr.push(total);

  const 총괄집계표wsData = arr.map((item) => {
    return {
      공종명: item.materialConstructionType,
      // 품목: item.materialTitle,
      // 규격: item.materialStandard,
      // 단위: item.materialUnit,
      // 부위: item.part,
      // 수량: numberWithCommas(item.qty),
      재료단가: numberWithCommas(item.AmtMaterialAmount),
      재료금액: numberWithCommas(item.AmtMaterialAmount),
      노무단가: numberWithCommas(item.AmtMaterialNomuAmount),
      노무금액: numberWithCommas(item.AmtMaterialNomuAmount),
      경비단가: numberWithCommas(item.AmtMaterialExpenseAmount),
      경비금액: numberWithCommas(item.AmtMaterialExpenseAmount),
      합계단가: numberWithCommas(item.AmtMaterialExpenseAmount),
      합계금액: numberWithCommas(item.AmtMaterialExpenseAmount),
      비고: item.bigo,
    };
  });

  const 총괄집계표ws = XLSX.utils.json_to_sheet(총괄집계표wsData);

  // const 총괄집계표merge = [
  //   { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
  //   // { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
  // ];
  var 총괄집계표cols = [
    { width: 30 },
    // // { width: 15 },
    // // { width: 20 },
    // // { width: 10 },
    // // { width: 10 },
    // { width: 30 },
    // { width: 30 },
    // { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
  ];

  for (var i in 총괄집계표ws) {
    if (typeof 총괄집계표ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    총괄집계표ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      총괄집계표ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      총괄집계표ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      총괄집계표ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      총괄집계표ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
      총괄집계표ws[i].s.fill = {
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }

  총괄집계표ws["!autofilter"] = { ref: "A1:G1000" };
  // 총괄집계표ws["!merges"] = 총괄집계표merge;
  총괄집계표ws["!cols"] = 총괄집계표cols;
  총괄집계표ws["!rows"] = Object.entries(총괄집계표ws).map(() => {
    return { hpx: 30 };
  });

  return 총괄집계표ws;
};

const get내역서ws = (rows) => {
  const 내역서wsData = rows.map((item) => {
    return {
      // "1구분": item.floor,
      // "2구분": item.room,
      // "3구분": item.section,
      공종명: item.materialConstructionType,
      품목: item.materialTitle,
      규격: item.materialStandard,
      단위: item.materialUnit,
      // 부위: item.part,
      // 구분: item.gubun,
      수량: numberWithCommas(item.qty),
      재료단가: numberWithCommas(item.materialAmount),
      재료금액: numberWithCommas(item.materialAmount * item.qty),
      노무단가: numberWithCommas(item.materialNomuAmount),
      노무금액: numberWithCommas(item.materialNomuAmount * item.qty),
      경비단가: numberWithCommas(item.materialExpenseAmount),
      경비금액: numberWithCommas(item.materialExpenseAmount * item.qty),
      합계단가: numberWithCommas(item.materialTotalAmount),
      합계금액: numberWithCommas(item.materialTotalAmount * item.qty),
      비고: item.bigo,
    };
  });

  const 내역서ws = XLSX.utils.json_to_sheet(내역서wsData);

  // const 내역서merge = [
  //   { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
  //   // { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
  // ];
  var 내역서cols = [
    { width: 30 },
    { width: 15 },
    { width: 20 },
    { width: 10 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 10 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
    { width: 30 },
  ];

  for (var i in 내역서ws) {
    if (typeof 내역서ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    내역서ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      내역서ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      내역서ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      내역서ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      내역서ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
      내역서ws[i].s.fill = {
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }

  내역서ws["!autofilter"] = { ref: "A1:G1000" };
  // 내역서ws["!merges"] = 내역서merge;
  내역서ws["!cols"] = 내역서cols;
  내역서ws["!rows"] = Object.entries(내역서ws).map(() => {
    return { hpx: 30 };
  });

  return 내역서ws;
};

const get갑지ws = (projectInfo) => {
  const 갑지wsData = [
    { 1: "견적서", 2: "" },
    { 1: "", 2: "" },
    { 1: "", 2: "" },
    { 1: "", 2: "" },
    { 1: "", 2: "" },
    { 1: "제출처 / CLIENT", 2: "날짜 / DATE" },
    { 1: `${projectInfo.client}`, 2: `${projectInfo.date}` },
    { 1: "공사명 / PROJECT", 2: "" },
    { 1: `${projectInfo.project}`, 2: "" },
    { 1: "금액 / AMOUNT", 2: "" },
    { 1: `${projectInfo.amount}`, 2: "" },
    { 1: "공사기간 / PERIOD", 2: "" },
    { 1: `${projectInfo.period}`, 2: "" },
    { 1: "제외공사 / EXEPTION WORK", 2: "" },
    { 1: `${projectInfo.exeptionWork}`, 2: "" },
    { 1: "비고 / REMARK", 2: "" },
    { 1: `${projectInfo.remark}`, 2: "" },
  ];
  const 갑지ws = XLSX.utils.json_to_sheet(갑지wsData);
  const 갑지merge = [
    { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
    // { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
  ];
  var 갑지cols = [
    { width: 150, height: 100 }, // first column
    { width: 30, height: 100 }, // second column
    // { width: 200 }, //...
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
  ];

  for (var i in 갑지ws) {
    if (typeof 갑지ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    갑지ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: cell.r === 1 ? 24 : 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "left",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      갑지ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      갑지ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      갑지ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      갑지ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
    }

    if (cell.r >= 6 && cell.r % 2 === 1) {
      // alert(cell.r);
      // every other row
      갑지ws[i].s.fill = {
        // background color
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }
  갑지ws["!merges"] = 갑지merge;
  갑지ws["!cols"] = 갑지cols;
  갑지ws["!rows"] = [
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 20 },
    { hpx: 30 },
    { hpx: 20 },
    { hpx: 30 },
    { hpx: 20 },
    { hpx: 30 },
    { hpx: 20 },
    { hpx: 30 },
    { hpx: 20 },
    { hpx: 30 },
    { hpx: 20 },
    { hpx: 30 },
  ];

  return 갑지ws;
};

const get원가계산서ws = (reportVariables) => {
  const 원가계산서wsData = [
    { 1: "비목", 2: "", 3: "", 4: "금액", 5: "구성비", 6: "비고" },
    {
      1: "순\n공\n사\n원\n가",
      2: "재료비",
      3: "직접재료비",
      4: `${numberWithCommas(reportVariables.직접재료비)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "재료비",
      3: "간접재료비",
      4: `${numberWithCommas(reportVariables.간접재료비)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "재료비",
      3: "작업부산물",
      4: `${numberWithCommas(reportVariables.작업부산물)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "재료비",
      3: "[소계]",
      4: `${numberWithCommas(reportVariables.소계1)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "노무비",
      3: "직접노무비",
      4: `${numberWithCommas(reportVariables.직접노무비)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "노무비",
      3: "간접노무비",
      4: `${numberWithCommas(reportVariables.간접노무비)}`,
      5: "직접노무비 * 4.5%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "노무비",
      3: "[소계]",
      4: `${numberWithCommas(reportVariables.소계2)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "운반비",
      4: `${numberWithCommas(reportVariables.운반비)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "기계경비",
      4: `${numberWithCommas(reportVariables.기계경비)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "가설비",
      4: `${numberWithCommas(reportVariables.가설비)}`,
      5: "-",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "산재보험료",
      4: `${numberWithCommas(reportVariables.산재보험료)}`,
      5: "노무비 * 4.05%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "고용보험료",
      4: `${numberWithCommas(reportVariables.고용보험료)}`,
      5: "노무비 * 0.87%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "건강보험료",
      4: `${numberWithCommas(reportVariables.건강보험료)}`,
      5: "직접노무비 * 1.76%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "연금보험료",
      4: `${numberWithCommas(reportVariables.연금보험료)}`,
      5: "직접노무비 * 2.49%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "노인장기요양보험료",
      4: `${numberWithCommas(reportVariables.노인장기요양보험료)}`,
      5: "건강보험료 * 8.51%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "퇴직공제부금비",
      4: `${numberWithCommas(reportVariables.퇴직공제부금비)}`,
      5: "직접노무비 * 2.3%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "안전관리비",
      4: `${numberWithCommas(reportVariables.안전관리비)}`,
      5: "(재료비+직접노무비) * 1.89% + 5,439천원",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "기타경비",
      4: `${numberWithCommas(reportVariables.기타경비)}`,
      5: "(재료비+노무비) * 1.25%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "환경보전비",
      4: `${numberWithCommas(reportVariables.환경보전비)}`,
      5: "(재료비+직접노무비+기계경비) * 0.50%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "지급발급수수료",
      4: `${numberWithCommas(reportVariables.지급발급수수료)}`,
      5: "(재료비+직접노무비+기계경비) * 0.081%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "건설기계대여수수료",
      4: `${numberWithCommas(reportVariables.건설기계대여수수료)}`,
      5: "(재료비+직접노무비+기계경비) * 0.070%",
      6: "-",
    },
    {
      1: "순공사원가",
      2: "경비",
      3: "[소계]",
      4: `${numberWithCommas(reportVariables.소계3)}`,
      5: "-",
      6: "-",
    },
    {
      1: "계",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.계)}`,
      5: "",
      6: "",
    },
    {
      1: "일반관리비",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.일반관리비)}`,
      5: "공사원가 * 2.85%",
      6: "",
    },
    {
      1: "이윤",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.이윤)}`,
      5: "공사원가 * 1.25%",
      6: "",
    },
    {
      1: "폐기물처리비",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.폐기물처리비)}`,
      5: "",
      6: "",
    },
    {
      1: "공급가액",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.공급가액)}`,
      5: "",
      6: "",
    },
    {
      1: "단수정리",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.단수정리)}`,
      5: "",
      6: "",
    },
    {
      1: "도급액",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.도급액)}`,
      5: "",
      6: "",
    },
    {
      1: "부가가치세",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.부가가치세)}`,
      5: "공급가액의 10%",
      6: "",
    },
    {
      1: "총공사비",
      2: "",
      3: "",
      4: `${numberWithCommas(reportVariables.총공사비)}`,
      5: "",
      6: "",
    },
  ];
  const 원가계산서ws = XLSX.utils.json_to_sheet(원가계산서wsData);
  const 원가계산서merge = [
    { s: { r: 1, c: 0 }, e: { r: 1, c: 2 } },
    { s: { r: 2, c: 0 }, e: { r: 23, c: 0 } },
    { s: { r: 2, c: 1 }, e: { r: 5, c: 1 } },
    { s: { r: 6, c: 1 }, e: { r: 8, c: 1 } },
    { s: { r: 9, c: 1 }, e: { r: 23, c: 1 } },

    { s: { r: 24, c: 0 }, e: { r: 24, c: 2 } },
    { s: { r: 25, c: 0 }, e: { r: 25, c: 2 } },
    { s: { r: 26, c: 0 }, e: { r: 26, c: 2 } },
    { s: { r: 27, c: 0 }, e: { r: 27, c: 2 } },
    { s: { r: 28, c: 0 }, e: { r: 28, c: 2 } },
    { s: { r: 29, c: 0 }, e: { r: 29, c: 2 } },
    { s: { r: 30, c: 0 }, e: { r: 30, c: 2 } },
    { s: { r: 31, c: 0 }, e: { r: 31, c: 2 } },
    { s: { r: 32, c: 0 }, e: { r: 32, c: 2 } },
    // { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
  ];
  var 원가계산서cols = [
    { width: 10 }, // first column
    { width: 10 }, // second column
    { width: 30 }, // second column
    { width: 30 }, // second column
    { width: 50 }, // second column
    { width: 30 }, // second column
    // { width: 200 }, //...
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
    // { width: 200 },
  ];

  for (var i in 원가계산서ws) {
    if (typeof 원가계산서ws[i] != "object") continue;
    let cell = XLSX.utils.decode_cell(i);

    // console.log("cell~!!!");
    // console.log(cell);
    원가계산서ws[i].s = {
      // styling for all cells
      font: {
        name: "arial",
        sz: 14,
      },
      alignment: {
        vertical: "center",
        // horizontal: "center",
        horizontal: "center",
        wrapText: "1", // any truthy value here
      },
      border: {
        right: {
          style: "thin",
          color: "000000",
        },
        left: {
          style: "thin",
          color: "000000",
        },
        top: {
          style: "thin",
          color: "000000",
        },
        bottom: {
          style: "thin",
          color: "000000",
        },
      },
    };

    if (cell.c == 0) {
      // first column
      원가계산서ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      원가계산서ws[i].z = "DD/MM/YYYY HH:MM";
    } else {
      원가계산서ws[i].s.numFmt = "00.00"; // other numbers
    }

    if (cell.r == 0) {
      // first row
      원가계산서ws[i].s.border.bottom = {
        // bottom border
        style: "thin",
        color: "000000",
      };
    }

    if (
      cell.c === 1 ||
      cell.r === 1 ||
      cell.r === 5 ||
      cell.r === 8 ||
      cell.r === 23
    ) {
      // alert(cell.r);
      // every other row
      원가계산서ws[i].s.fill = {
        // background color
        patternType: "solid",
        fgColor: { rgb: "b2b2b2" },
        bgColor: { rgb: "b2b2b2" },
      };
    }
  }
  원가계산서ws["!merges"] = 원가계산서merge;
  원가계산서ws["!cols"] = 원가계산서cols;
  원가계산서ws["!rows"] = [
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
    { hpx: 30 },
  ];

  return 원가계산서ws;
};

export const getAccumulator = (materials, field) => {
  return materials.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue[field] * currentValue.materialQty;
  }, 0);
};

export function getReport2Data(materials) {
  const 직접재료비 = getAccumulator(materials, "materialAmount");
  const 간접재료비 = 0;
  const 작업부산물 = 0;

  const 소계1 = 직접재료비 + 간접재료비 + 작업부산물;

  const 직접노무비 = getAccumulator(materials, "materialNomuAmount");

  const 간접노무비 = 직접노무비 * 0.045;
  const 소계2 = 직접노무비 + 간접노무비;

  const 운반비 = 0;
  const 기계경비 = getAccumulator(materials, "materialExpenseAmount");
  const 가설비 = 0;
  const 산재보험료 = 직접노무비 * 0.0405;
  const 고용보험료 = 직접노무비 * 0.0087;
  const 건강보험료 = 직접노무비 * 0.0176;
  const 연금보험료 = 직접노무비 * 0.0249;
  const 노인장기요양보험료 = 건강보험료 * 0.0851;
  const 퇴직공제부금비 = 직접노무비 * 0.023;
  const 안전관리비 = (직접재료비 + 직접노무비) * 0.0189 + 5439000;
  const 기타경비 = (직접재료비 + 직접노무비) * 0.0125;
  const 환경보전비 = (직접재료비 + 직접노무비 + 기계경비) * 0.005;
  const 지급발급수수료 = (직접재료비 + 직접노무비 + 기계경비) * 0.00081;
  const 건설기계대여수수료 = (직접재료비 + 직접노무비 + 기계경비) * 0.0007;
  const 소계3 =
    운반비 +
    기계경비 +
    가설비 +
    산재보험료 +
    고용보험료 +
    건강보험료 +
    연금보험료 +
    노인장기요양보험료 +
    퇴직공제부금비 +
    안전관리비 +
    기타경비 +
    환경보전비 +
    지급발급수수료 +
    건설기계대여수수료;
  const 계 = 소계1 + 소계2 + 소계3;

  const 일반관리비 = 계 * 0.0285;
  const 이윤 = 계 * 0.0125;
  const 폐기물처리비 = 0;
  const 공급가액 = 0;
  const 단수정리 = 0;
  const 도급액 = 0;
  const 부가가치세 = 0;
  const 총공사비 =
    계 +
    일반관리비 +
    이윤 +
    폐기물처리비 +
    공급가액 +
    단수정리 +
    도급액 +
    부가가치세;

  return {
    직접재료비,
    간접재료비,
    작업부산물,
    소계1,
    직접노무비,
    간접노무비,
    소계2,
    운반비,
    기계경비,
    가설비,
    산재보험료,
    고용보험료,
    건강보험료,
    연금보험료,
    노인장기요양보험료,
    퇴직공제부금비,
    안전관리비,
    기타경비,
    환경보전비,
    지급발급수수료,
    건설기계대여수수료,
    소계3,
    계,
    일반관리비,
    이윤,
    폐기물처리비,
    공급가액,
    단수정리,
    도급액,
    부가가치세,
    총공사비,
  };
}
