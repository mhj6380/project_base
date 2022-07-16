export const IMP_Code = "imp73749606";
export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://건축기사.com:8080/api/v1"
    : process.env.NODE_ENV === "test"
    ? "http://localhost:8080/api/v1"
    : "http://localhost:8080/api/v1";

export const SOCKET_BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://건축기사.com:8080"
    : process.env.NODE_ENV === "test"
    ? "http://localhost:8080"
    : "http://localhost:8080";

export const isUseSocket = true;
export const accentColor = "#159dff";
export const MEDIA_SERVER_URL = "https://wizmedia.me:8080/api/playmango/upload";
export const AESKey = "appPartner1234!";

export const projectTitle = "건축기사";
export const projecAdminTitle = "서비스 관리자";

export const defaultThumbnail = "/asset/thumbnail_square.png";
export const defaultImage = "/asset/noimg_horizontal.png";
export const defaultUserProfile =
  "https://dev.crevenew.com/data/img/20211228_img_qeie0UONROXDWpb4eHGjBVIIy.png";
