import styled from "styled-components";
import dayjs from "dayjs";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaHeart, FaRegEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import Avatar from "components/material/Avatar";
import { useAuthState } from "lib/providers/authProvider";
import axios from "util/axios";
import { BACKEND_URL } from "config";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const resp = await axios.get(url);
  return resp.data;
};

const NoData = styled.div`
  width: 100%;
  line-height: 100px;
  text-align: center;
  background: #f1f4f6;
`;
const ReplyCommentWrapper = styled.div`
  width: 100%;
  padding: 15px 40px;
  display: flex;
  flex-flow: row wrap;
  
  .reply-comment-info {
    width: calc(100% - 90px);
    padding-left: 20px;

    .reply-nickname {
      color:#737373;
      font-weight:700;
    }
    .reply-content {
        color: #1a1a1a;
        font-size:14px;
    }
    .reply-created {
      width:100%;
      color:#d3d4d5;
      font-size:12px;
      margin-top:5px;
    }
    .reply-likecount {
      font-size: 13px;
      margin-right: 25px;
      color grey;
      cursor:pointer;
      svg{
        position:relative;
        top:-1px;
        margin-right:3px;
      }
    }
 

  }
`;

const BoardViewPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;

  img{ max-width:100%;}
  iframe{
    width:100%;
    height:70vw;
    max-height:400px;
  }


  .board-header {
    width: 100%;
    border-bottom: 1px solid lightgrey;
    padding: 15px 0;
    position:relative;
    .created {
      color: grey;
    }
    .board-values{
      position:absolute;
      right:0;
      bottom:15px;
      .board-value{
        margin-left:20px;
        color:grey;
        svg{
          margin-right:5px;
          position:relative;
          top:-1px;
        }
      }
    }
  }
  .board-body {
    width: 100%;
    padding: 30px 15px;
    .author {
      width: 100%;
      display:flex;
      flex-flow: row wrap;
      margin-top: 40px;
      background: #F1F4F6;
      padding: 15px 20px;
      border-radius: 10px;
      .author-info{
        width: calc(100% - 200px);
        padding-left:30px;
        padding-top:10px;
        .author-nickname{
          font-weight:700;
        }
        .author-about{
          display: -webkit-box;
          display: -ms-flexbox;
          display: box;
          margin-top:1px;
          max-height:80px;
          overflow:hidden;
          vertical-align:top;
          text-overflow: ellipsis;
          word-break:break-all;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2
    
        }
      }
    }
  }
  .comments {
    width: 100%;
    .comments-header {
      width: 100%;
    }
    .comment-form {
      width: 100%;
      height: 120px;
      margin-top: 15px;
      padding: 15px;
      background: #f8f8ff;
      border-radius: 5px;
      display: flex;
      flex-flow: row wrap;
      textarea {
        width: calc(100% - 80px);
        padding: 10px;
      }
      .comment-submit {
        width: 80px;
        background: #00aedb;
        color: #fff;
        font-size: 14px;
      }
    }
    .comment-list {
      width: 100%;
      .comment {
        width: 100%;
        padding: 15px;
        border-bottom: 1px solid lightgrey;
        color:#737373;

        display:flex;
        flex-flow:row wrap;



        .comment-info{
          width:calc(100% - 100px);
          padding-left:20px;
        .comment-content{
          color: #1a1a1a;
          font-size:14px;
        }
        .comment-footer {
          width: 100%;
          padding: 5px 0;
          display: flex;
          flex-flow: row wrap;
          .createdAt{
            width:100%;
            color:#d3d4d5;
            font-size:12px;
            margin-bottom:5px;
          }
          .like {
            font-size: 13px;
            margin-right: 25px;
            color grey;
            cursor:pointer;
            svg{
              position:relative;
              top:-1px;
              margin-right:3px;
            }
          }
          .reply {
            cursor:pointer;
            font-size: 13px;
            color grey;
          }
        }
      }


      }
    }
  }

  .reply-form {
    width:100%;
    background:#F1F4F6; 
    padding:15px 10px;
    border-top: 1px solid lightgrey;
    .reply-input{
      width: calc(100% - 90px);
      height:40px;
      box-shadow:none;
      border:none;
      padding-left:15px;
    }
    .reply-submit{
      width:90px;
      height:40px;
      border:none;
      box-shadow:none;
      background: #1a1a1a;
      color: #fff;
      border-radius: 0 3px 3px 0;
    }
  }

  .reply-list{
    background: #F1F4F6;
  }
`;

const ActionBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .action-btn {
    position: relative;
    cursor: pointer;
    display: inline-block;
    background: #f1f4f6;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    margin: 0 10px;
    color: grey;

    :hover {
      background: #12a5f1;
      color: #fff;
    }
  }
`;

interface Props {
  board: any;
}

interface IActionBox {
  handleLike: any;
  handleScrab: any;
}

const BoardViewPage = (props: Props): JSX.Element => {
  const me = useAuthState();
  const router = useRouter();
  const { bo_id } = router.query;

  const fetcher = async (url: string) => {
    const resp = await axios.get(url);
    return resp.data;
  };

  const { data, mutate, error } = useSWR(
    `${BACKEND_URL}/board/${bo_id}`,
    fetcher
  );

  useEffect(() => {
    // 조회수 증가
    axios.patch(`${BACKEND_URL}/board/view-increment/${bo_id}`);
  }, []);

  const handleLike = () => {
    if (!me) return alert("로그인이 필요한 기능입니다.");

    axios.post(`${BACKEND_URL}/board/like`, {
      boardId: Number(bo_id),
      userId: me.userInfo.userId,
    });
  };

  const handleScrab = () => {
    if (!me) return alert("로그인이 필요한 기능입니다.");
    axios.post(`${BACKEND_URL}/board/scrap`, {
      boardId: Number(bo_id),
      userId: me.userInfo.userId,
    });
  };

  if (!bo_id) return <></>;
  if (!data) return <div>Loading</div>;
  if (error) return <div>ERROR</div>;

  return (
    <BoardViewPageWrapper>
      <div className="board-header">
        <h2>{data.title}</h2>
        <div className="created">
          {dayjs(data.createdAt).format("YYYY.MM.DD HH:mm")}
        </div>
        <div className="board-values">
          <span className="board-value">
            <FaRegEye />
            {data.viewCount}
          </span>
          <span className="board-value">
            <FaHeart />
            {data.likeCount}
          </span>
          <span className="board-value">
            <FaShareAlt />
            {data.shareCount}
          </span>
        </div>
      </div>

      <div className="board-body">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />

        <ActionBox handleLike={handleLike} handleScrab={handleScrab} />
        <div className="author">
          <Avatar src={data.authorInfo.profile} size="medium" />
          <div className="author-info">
            <div className="author-nickname">{data.authorInfo.nickname}</div>
            <div className="author-about">{data.authorInfo.about}</div>
          </div>
        </div>
      </div>

      <Comments
        datas={data.comments}
        userId={me.userInfo.userId}
        boardId={Number(bo_id)}
        data={data}
        mutate={mutate}
        me={me}
      />
    </BoardViewPageWrapper>
  );
};

interface IComments {
  datas: any;
  userId: string;
  boardId: number;
  data: any;
  mutate: any;
  me: any;
}

const Comments = ({ userId, boardId, datas, data, mutate, me }: IComments) => {
  const [content, setContent] = useState("");
  const contentRef = useRef(null);

  const handleChangeContent = (e: any) => {
    setContent(e.target.value);
    return;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (content === "") {
      alert("내용을 입력해주세요.");
      contentRef.current.focus();
      return;
    }

    setContent("");

    axios.post(`${BACKEND_URL}/board/comment`, {
      content,
      author: userId,
      boardId,
      topic: "default",
      parentId: 0,
    });

    mutate(
      {
        ...data,
        comments: [
          { content, author: userId, boardId, topic: "default" },
          ...data.comments,
        ],
      },
      false
    );
  };

  return (
    <div className="comments">
      <div className="comments-header">댓글 {datas.length}개</div>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          ref={contentRef}
          onChange={handleChangeContent}
          value={content}
        ></textarea>
        <button className="comment-submit" type="submit">
          댓글 등록
        </button>
      </form>
      <div className="comment-list">
        {datas.map((item: any) => (
          <Comment
            key={item.id}
            item={item}
            userId={userId}
            boardId={boardId}
            me={me}
          />
        ))}
      </div>
    </div>
  );
};

// SSR
export const getServerSideProps = async (context: any) => {
  const { bo_id } = context.query;

  const board = await fetcher(`${BACKEND_URL}/board/${bo_id}`);
  return {
    props: {
      board,
    },
  };
};

const ActionBox = ({ handleLike, handleScrab }: IActionBox) => {
  const [openShare, setOpenShare] = useState(false);

  const toggleOpenShare = () => {
    setOpenShare(!openShare);
    return;
  };

  return (
    <ActionBoxWrapper>
      <span onClick={handleLike} className="action-btn">
        <FaHeart />
      </span>
      <span onClick={handleScrab} className="action-btn">
        <FaBookmark />
      </span>
      <span onClick={toggleOpenShare} className="action-btn">
        {openShare && <div className="share-list">공유하기 준비중..</div>}
        <FaShareAlt />
      </span>
    </ActionBoxWrapper>
  );
};

const Comment = ({ item, userId, boardId, me }: any) => {
  const [openReply, setOpenReply] = useState(false);
  const toggleReply = () => {
    setOpenReply(!openReply);
  };

  return (
    <>
      <div className="comment">
        {/* <div className="comment"></div> */}
        <Avatar src={item.authorInfo.profile} size="xsmall" />

        <div className="comment-info">
          <b>{item.authorInfo.nickname}</b>
          <br />
          <span className="comment-content">{item.content}</span>
          <div className="comment-footer">
            <div className="createdAt">
              <AiOutlineClockCircle />
              {dayjs(item.createdAt).format("YYYY.MM.DD HH:mm")}
            </div>
            <span className="like">
              <FaHeart />
              좋아요
            </span>
            <span className="reply" onClick={toggleReply}>
              {item.childCount ? <>댓글 {item.childCount}개</> : <>답글달기</>}
            </span>
          </div>
        </div>
      </div>
      {openReply && (
        <>
          <ReplyList
            parentId={item.id}
            userId={userId}
            boardId={boardId}
            item={item}
            me={me}
          />
        </>
      )}
    </>
  );
};

const ReplyList = ({ parentId, userId, boardId, item, me }: any) => {
  const [content, setContent] = useState("");
  const contentRef = useRef(null);

  const handleChangeContent = (e: any) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    if (content === "") {
      alert("내용을 입력해주세요.");
      contentRef.current.focus();
      return;
    }

    mutate(
      [
        ...data,
        {
          boardId,
          content,
          author: me.userInfo.userId,
          topic: "default",
          likeCount: 0,
          createdAt: dayjs().format(),
          isChildren: true,
          parentId: item.id,
          authorInfo: {
            userId: me.userInfo.userId,
            nickname: me.userInfo.nickname,
            profile: me.userInfo.profile,
          },
        },
      ],
      false
    );

    axios.post(`${BACKEND_URL}/board/comment`, {
      content,
      author: userId,
      boardId,
      topic: "default",
      parentId: item.id,
    });
  };
  const { data, mutate, error } = useSWR(
    `${BACKEND_URL}/board/comment-childrens/${parentId}`,
    fetcher
  );

  if (!data) return <div>Loading</div>;
  if (error) return <div>ERROR</div>;

  return (
    <>
      <div className="reply-list">
        {data.map((item: any) => (
          <ReplyComment key={item.id} item={item} />
        ))}
        {data.length === 0 && <NoData>답글이 없습니다.</NoData>}
      </div>
      <ReplyForm
        contentRef={contentRef}
        content={content}
        handleChangeContent={handleChangeContent}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

const ReplyForm = ({
  contentRef,
  content,
  handleChangeContent,
  handleSubmit,
}) => {
  return (
    <div className="reply-form">
      <input
        ref={contentRef}
        value={content}
        onChange={handleChangeContent}
        className="reply-input"
        placeholder="답글을 입력해주세요."
        type="text"
      />
      <button className="reply-submit" onClick={handleSubmit}>
        답글 등록
      </button>
    </div>
  );
};

const ReplyComment = ({ item }: any) => {
  return (
    <ReplyCommentWrapper>
      <Avatar src={item.authorInfo.profile} size="xsmall" />
      <div className="reply-comment-info">
        <div className="reply-nickname">{item.authorInfo.nickname}</div>
        <div className="reply-content">{item.content}</div>
        <div className="reply-created">
          {dayjs(item.createdAt).format("YYYY.MM.DD HH:mm")}
        </div>
        <div className="reply-likecount">
          <FaHeart />
          좋아요 {item.likeCount}개
        </div>
      </div>
    </ReplyCommentWrapper>
  );
};
export default BoardViewPage;
