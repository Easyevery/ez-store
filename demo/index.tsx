import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { Button, Card, Flex, Typography } from 'antd';
import React, { useState } from 'react';

import { createRoot } from 'react-dom/client';
import { getAsyncCache } from './async';

const cardStyle: React.CSSProperties = {
  width: 620,
};

function App() {
  const [form] = ProForm.useForm();
  const [data, setData] = useState<string[]>();
  return (
    <>
      <Button block type="link">
        <Typography.Title level={1} color="blue">
          ez store
        </Typography.Title>
      </Button>

      <Flex style={{ height: '90vh' }} justify="space-between" gap={24}>
        <Card
          hoverable
          style={cardStyle}
          styles={{ body: { padding: 0, overflow: 'hidden' } }}
        >
          <Flex justify="center">
            <Flex
              vertical
              align="flex-end"
              justify="space-between"
              style={{ padding: 32 }}
            >
              <Typography.Title level={3}>sync cache</Typography.Title>
              <Button
                type="primary"
                onClick={() => {
                  getAsyncCache.get();
                }}
              >
                Get Cache
              </Button>
            </Flex>
          </Flex>
        </Card>

        <Card
          hoverable
          style={cardStyle}
          styles={{ body: { padding: 0, overflow: 'hidden' } }}
        >
          <Flex justify="center">
            <Flex
              vertical
              align="flex-end"
              justify="space-between"
              style={{ padding: 32 }}
            >
              <Typography.Title level={3}>async cache</Typography.Title>
              <Button
                type="primary"
                onClick={() => {
                  getAsyncCache.get();
                }}
              >
                Get Cache
              </Button>
            </Flex>

            <ProForm form={form} submitter={false}>
              <ProFormSelect
                width="md"
                placeholder="输入1"
                mode="multiple"
                debounceTime={600}
                request={async () => {
                  const res = (await getAsyncCache.get()) || [];
                  console.log('%c Line:88 🍧 res', 'color:#e41a6a', res);

                  return res;
                }}
              />

              <ProFormSelect
                width="md"
                placeholder="输入2"
                mode="multiple"
                debounceTime={600}
                request={async () => {
                  const res = (await getAsyncCache.get()) || [];
                  console.log('%c Line:100 🌽 res', 'color:#465975', res);

                  return res;
                }}
              />
            </ProForm>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
