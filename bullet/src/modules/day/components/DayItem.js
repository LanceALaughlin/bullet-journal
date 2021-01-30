import React, { useState } from "react";
import { Button, Card } from "antd";
import { EditOutlined } from "@ant-design/icons";
import MDEditor from "@uiw/react-md-editor";

const DayItem = ({ post }) => {
  const [editing, setEditing] = useState(false);

  return (
    <Card
      style={{ width: "50%", marginBottom: 15 }}
      title={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{post.date}</div>
          <Button type="text" onClick={() => setEditing((editing) => !editing)}>
            <EditOutlined />
          </Button>
        </div>
      }
    >
      {editing ? (
        <div>
          <MDEditor value={post.content} />
          <Button
            type="primary"
            style={{ marginTop: 16, marginRight: 10 }}
            onClick={() => {
              setEditing(false);
            }}
          >
            Submit
          </Button>
          <Button onClick={() => setEditing(false)}>Cancel</Button>
        </div>
      ) : (
        <MDEditor.Markdown source={post.content} />
      )}
    </Card>
  );
};

export default DayItem;
