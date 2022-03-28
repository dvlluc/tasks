import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        type="text"
        placeholder="Поиск"
      />
      <MySelect
        value={filter.sort}
        onChange={(selecterSort) => {
          setFilter({ ...filter, sort: selecterSort });
        }}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "по заголовку" },
          { value: "body", name: "по отисанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
