import React from "react";
import FaqSectionComp from "./FaqSection";

export default {
  component: FaqSectionComp,
  title: "section",
};

const faqDatas = [
  {
    id: 1,
    title: "프로젝트 개발 완료 후 오류가 발견되면 처리해 주시나요?",
    content: `A. 꼼꼼한 QA 과정을 통해 프로덕션 배포 전 대부분의 오류사항을
          체크합니다.<br/>의도치 않게 발견되는 오류들은 하자 보수 기간 중 인지하는 
          즉시 조치해 드립니다.`,
  },
  {
    id: 2,
    title: "아이디어만 있어도 앱 또는 웹사이트를 만들 수 있나요?",
    content: `A. 아이디어만 있으셔도 충분히 가능합니다.<br/>기존에 있는 서비스를 참고하셨다면 함께 전달해 주시면 서비스 기획에 큰 도움이 됩니다.`,
  },
  {
    id: 3,
    title: "앱을 안드로이드, 아이폰 모두 런칭할 경우 비용이 추가로 발생되나요?",
    content: `A. 많은 타사의 경우 안드로이드용 앱과 아이폰용 앱을 따로 개발하기 때문에 개발하실 경우 더욱 많은 비용이 발생하고 유지 보수 또한 쉽지 않습니다.<br/>
당사의 경우 구글 공식 크로스 플랫폼인 Flutter를 이용해 개발하기 때문에 동일한 코드로 안드로이드와 아이폰이 동시에 개발됩니다.<br/>적은 비용으로 앱의 변경사항을 빠르게 적용할 수 있으며 퍼포먼스 또한 훌륭합니다.`,
  },
  {
    id: 4,
    title: "개발 완료 시 소스코드는 제공해 주시나요?",
    content: `A. 네 완료된 프로젝트는 소스코드를 제공해 드리고 있습니다.<br/>프로젝트 초기에 외주 개발로 운영하시다가 인바운드 개발자를 통해 내부에서 유지 보수를 하시거나,<br/>월단위 유지 보수를 통해 프로젝트를 지속적으로 관리받으실 수 있습니다.`,
  },
];

const FaqTemplate = (args) => <FaqSectionComp {...args} />;

export const FaqSection = FaqTemplate.bind({});
FaqSection.args = {
  datas: faqDatas,
  backgroundColor: "#1a1a1a",
  sectionTitleColor: "#fff",
  itemColor: "#fff",
  itemBorderWeight: 1,
  itemBorderRadius: 5,
  itemBorderColor: "#fff",
  childBackgroundColor: "rgba(255,255,255,0.1)",
  childColor: "#fff",
};
