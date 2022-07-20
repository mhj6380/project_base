// 프로젝트 시작 시 세팅
const DOMAIN = "http://domain.com";
export const IMP_Code = ""; // 아임포트 사용 시
export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? `${DOMAIN}:8080/api/v1`
    : process.env.NODE_ENV === "test"
    ? "http://localhost:8080/api/v1"
    : "http://localhost:8080/api/v1";

export const SOCKET_BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? `${DOMAIN}:8080`
    : process.env.NODE_ENV === "test"
    ? "http://localhost:8080"
    : "http://localhost:8080";

export const useBackend = true; // 백엔드 사용여부
export const isUseSocket = true;
export const accentColor = "#159dff";
export const MEDIA_SERVER_URL = "";
export const AESKey = "cubeleanAESKey6380";
export const projectTitle = "큐브린 프로젝트";
export const projecAdminTitle = "ADMIN";
export const defaultUserProfile = "";
export const defaultImage =
  "https://cdn.pixabay.com/photo/2022/07/05/09/56/field-of-rapeseeds-7302708_1280.jpg";
