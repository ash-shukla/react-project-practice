import { TableColumnsType } from "antd";
import { tableData } from "../assets/tableData.js";
import { convertToTitle } from "../common/ConvertToTitle.js";
import { Property } from "../interfaces/TableDataModel.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox.js";

const defaultColumns = JSON.parse(
  localStorage.getItem("defaultCheckedColumns")
);

const columnKeys = Object.keys(
  tableData.data.propertiesPage.properties[0]
); /* To  get the keys for the column to be created for the table */

const useTableRender = () => {
  const defaultCheckedColumns = [...columnKeys.slice(0, 10)];

  // To Prevent recreation of table title every time
  const getTitle = useCallback(
    (title: string) => {
      return convertToTitle(title);
    },
    [tableData]
  );

  const [selectedKeys, setSelectedKeys] = useState<string[]>(
    !defaultColumns?.length ? [...defaultCheckedColumns] : [...defaultColumns]
  );
  const [loadData, setLoadData] = useState<Property[]>([]);

  const allData: Property[] = useMemo(() => {
    return tableData.data.propertiesPage.properties.map((data: Property) => {
      const imgName: string = data?.pictures[0].filename;
      return {
        ...data,
        pictures: imgName,
      };
    });
  }, [tableData]);

  const columns: TableColumnsType<Property> = columnKeys.map(
    (title: string) => {
      return {
        title: getTitle(title),
        dataIndex: title,
        key: title,
        width: "auto",
        sorter:
          typeof allData[0][title] === "number"
            ? (a: Property, b: Property) => a[title] - b[title]
            : false,
      };
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadData(allData); // to give the loading effect on table //
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [loadData]);

  const handleCheckboxChecked = (e: CheckboxChangeEvent) => {
    let tempKeys = [...selectedKeys];
    if (!selectedKeys.includes(e.target.name)) {
      tempKeys = [...selectedKeys, e.target.name];
      setSelectedKeys([...selectedKeys, e.target.name]);
    } else {
      tempKeys = [...selectedKeys];
      tempKeys.splice(
        tempKeys.findIndex((eachKey) => eachKey === e.target.name),
        1
      );
      console.log("uncheck", tempKeys);
      setSelectedKeys([...tempKeys]);
    }
    localStorage.setItem("defaultCheckedColumns", JSON.stringify(tempKeys));
  };

  const handleResetColumns = () => {
    localStorage.setItem(
      "defaultCheckedColumns",
      JSON.stringify(defaultCheckedColumns)
    );
    setSelectedKeys([...defaultCheckedColumns]);
  };

  return {
    columns,
    handleCheckboxChecked,
    selectedKeys,
    loadData,
    handleResetColumns,
  };
};

export default useTableRender;
