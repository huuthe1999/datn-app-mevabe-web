// libs
import React from "react";
import { Image } from "antd";
// others
import "./style.scss";
import { useRouter } from "@/hooks";
import { Link } from "react-router-dom";
import CONSTANTS from "@/constants";

const PostAttachments = ({ attachments, _id }) => {
  const [first, ...rest] = attachments || [];
  const router = useRouter();

  if (attachments.length)
    return (
      <div className="post-attachments-wrapper">
        <Link
          to={{
            pathname: `${CONSTANTS.ROUTERS.STORIES}/${_id}`,
            state: {
              background: router.location,
              hasImage: !!attachments.length,
            },
          }}
        >
          <Image
            src={first}
            preview={{
              mask: <span>{rest.length ? `+${rest.length}` : ""}</span>,
              visible: false,
            }}
          />
        </Link>
      </div>
    );

  return null;
};

export default PostAttachments;
