import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      })
    );
    await app.init();
  });

  describe("AUTH", () => {
    it.todo("회원가입 프로세스 점검");
    it.todo("로그인 프로세스 점검");
    it.todo("회원정보 수정 점검");
    it.todo("회원탈퇴 프로세스 점검");

    let accessToken: string;

    it("GET", () => {
      return request(app.getHttpServer()).get("/auth").expect(200);
    });
    it("Register 201", async () => {
      const result = await request(app.getHttpServer())
        .post("/auth/register")
        .send({
          userId: "TEST",
          deviceLanguage: "KO",
          country: "KR",
          language: "KO",
          registerPath: "test",
        })
        .expect(201);

      accessToken = result.body.access_token;

      return result;
    });

    it("회원가입 실패 400", () => {
      return request(app.getHttpServer())
        .post("/auth/register")
        .send({
          userId: "TEST",
          password: "testpassword",
          other: "hacking",
        })
        .expect(400);
    });

    it("회원정보 수정", () => {
      return request(app.getHttpServer())
        .put("/auth")
        .send({
          userId: "TEST",
          password: "1111",
          about: "EDIT",
          profile: "EDIT",
          country: "EDIT",
          language: "EDIT",
          registerPath: "EDIT",
          snsFacebook: "",
        })
        .expect(200);
    });

    it("회원 정보 조회 성공 201", () => {
      return request(app.getHttpServer())
        .get("/auth/TEST")
        .set("Authorization", "bearer " + accessToken)
        .expect(200);
    });

    it("회원탈퇴 시도", () => {
      return request(app.getHttpServer()).delete("/auth/TEST").expect(200);
    });

    it("회원탈퇴 점검 완료", () => {
      return request(app.getHttpServer())
        .get("/auth/TEST")
        .set("Authorization", "bearer " + accessToken)
        .expect(404);
    });
  });

  describe("사운드", () => {
    it.todo("사운드 CRUD");

    let insertedId: number;

    it("사운드 등록 201", async () => {
      const result: any = await request(app.getHttpServer())
        .post("/sound")
        .send({
          title: "insertTitle",
          icon: "testicon",
          iconSelected: "testSelectedIcon",
          topic: "test",
          source: "testSource.mp3",
          isPublic: false,
          type: 0,
        })
        .expect(201);

      // 생성된 게시물 id 저장
      insertedId = result.body.id;

      return result;
    });

    it("사운드 수정 200", () => {
      return request(app.getHttpServer())
        .patch("/sound")
        .send({
          id: insertedId,
          source: "editSource.mp3",
          title: "editTitle",
          icon: "editIcon",
          iconSelected: "iconSelected",
        })
        .expect(200);
    });
  });

  describe("사운드믹스", () => {
    it.todo("사운드믹스 CRUD");
    it.todo("사운드믹스 좋아요 기능점검");
    it.todo("사운드믹스 댓글 CRUD");

    let insertedId: number;

    it("사운드믹스 등록 201", async () => {
      const result: any = await request(app.getHttpServer())
        .post("/sound-mix")
        .send({
          userId: "insertTitle",
          title: "insertTitle",
          materialJSON: "JSON",
          soundCount: 10,
          content: "test",
          source: "testSource.mp3",
          isPremium: true,
          isPublic: false,
        })
        .expect(201);

      // 생성된 게시물 id 저장
      insertedId = result.body.id;

      return result;
    });

    it("사운드 수정 200", () => {
      return request(app.getHttpServer())
        .patch("/sound-mix")
        .send({
          id: insertedId,
          source: "editSource.mp3",
          title: "editTitle",
          icon: "editIcon",
          iconSelected: "iconSelected",
        })
        .expect(200);
    });
  });
});
