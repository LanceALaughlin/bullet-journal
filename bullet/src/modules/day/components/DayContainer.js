import React, { useState } from "react";
import { Button, Card } from "antd";
import { EditOutlined } from "@ant-design/icons";
import MDEditor from "@uiw/react-md-editor";
import moment from "moment";
import useLocalStorage from "../../common/hooks/use-local-storage";

const DayContainer = () => {
  const [key, storedValue, setStoredValue] = useLocalStorage(
    moment().format("MMMM Do YYYY"),
    ""
  );
  const [value, setValue] = useState(storedValue);
  const [editing, setEditing] = useState(false);

  return (
    <div className="day-container">
      <Card
        style={{ width: "50%" }}
        title={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{key}</div>
            <div>
              {
                <Button type="text" onClick={() => setEditing(true)}>
                  <EditOutlined />
                </Button>
              }
            </div>
          </div>
        }
      >
        {editing === false ? (
          <div>{<MDEditor.Markdown source={value} />}</div>
        ) : (
          <MDEditor value={value} onChange={setValue} />
        )}
      </Card>
      {editing && (
        <div>
          <Button
            type="primary"
            style={{ marginTop: 16, marginRight: 10 }}
            onClick={() => {
              setStoredValue(value);
              setEditing(false);
            }}
          >
            Submit
          </Button>
          <Button onClick={() => setEditing(false)}>Cancel</Button>
        </div>
      )}
    </div>
  );
};

export default DayContainer;
