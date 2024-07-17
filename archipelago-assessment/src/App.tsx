import { Button, Checkbox, Col, Divider, Flex, Modal, Row, Table } from "antd";
import "./App.css";
import useTableRender from "./custom-hook/useTableRender";
import { useState } from "react";

function App() {
  const [showHideModal, setShowHideModal] = useState<boolean>(false);
  const {
    columns,
    handleCheckboxChecked,
    selectedKeys,
    loadData,
    handleResetColumns,
  } = useTableRender();

  return (
    <>
      <Flex gap="small">
        <Button type="primary" onClick={() => setShowHideModal(true)}>
          Show Hide Columns
        </Button>
        <Button type="primary" onClick={handleResetColumns}>
          Reset Columns Configuration
        </Button>
      </Flex>
      <Divider />
      <Table
        tableLayout="fixed"
        columns={columns.filter((eachColumn) =>
          selectedKeys.includes(String(eachColumn.key))
        )}
        dataSource={loadData ?? []}
        loading={!loadData.length}
        size="large"
        scroll={{ x: 500 }}
        pagination={false}
        bordered
      />
      <Modal
        open={showHideModal}
        title={<b>Column List</b>}
        footer={[]}
        onCancel={() => setShowHideModal(false)}
        width={1000}
        centered
      >
        <Row gutter={[12, 2]}>
          {columns.map((eachColumn) => {
            return (
              <Col xl={8} md={12} sm={12} xs={12} key={String(eachColumn.key)}>
                <Checkbox
                  key={String(eachColumn.key)}
                  name={String(eachColumn.key)}
                  checked={selectedKeys.includes(String(eachColumn.key))}
                  onChange={handleCheckboxChecked}
                >
                  {String(eachColumn.key)}
                </Checkbox>
              </Col>
            );
          })}
        </Row>
      </Modal>
    </>
  );
}

export default App;
