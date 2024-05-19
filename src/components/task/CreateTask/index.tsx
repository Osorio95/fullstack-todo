import React, { FC, useState } from 'react'
import { Button, Card, ColorPicker, DatePicker, Flex, Form, FormProps, Input, Select, Space } from 'antd'
import { EditOutlined, DownOutlined, } from '@ant-design/icons';
import { IFormTodoPayload } from '@/interfaces/todo';
import { useCreateTask } from '@/hooks/useCreateTask';
import { PriorityList, PriorityListLabels } from '@/constants/priority';
import dayjs from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { CurrentStatusList, CurrentStatusListLabels } from '@/constants/status';

export const CreateTask: FC = () => {
    const { onSubmit } = useCreateTask()
    const [form] = Form.useForm();

    const onFinish: FormProps<IFormTodoPayload>['onFinish'] = (values) => {
        onSubmit({ ...values })
        form.resetFields()
    };

    const onFinishFailed: FormProps<IFormTodoPayload>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    dayjs.extend(customParseFormat);

    return (
        <Flex justify='center'>
            <Card title='Create new task'
                style={{ height: 'fit-content' }}
            >
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ width: 300 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<IFormTodoPayload>
                        label="Content"
                        name="content"
                        rules={[{ required: true, message: 'Please add a description' }]}
                    >
                        <Input
                            placeholder="Task description"
                            prefix={<EditOutlined />}
                        />
                    </Form.Item>
                    <Form.Item<IFormTodoPayload>
                        label="Priority"
                        name="priority"
                        rules={[{ required: true, message: 'Please input the priority of the task' }]}
                    >
                        <Select
                            placeholder="Task priority">
                            {PriorityList.map(priority =>
                                <Select.Option key={priority} value={priority}>
                                    {PriorityListLabels[priority]}
                                </Select.Option>
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item<IFormTodoPayload>
                        label="Current state"
                        name="currentStatus"
                        rules={[{ required: true, message: 'Please input the current stage of the task' }]}
                    >
                        <Select
                            placeholder="Task current status">
                            {CurrentStatusList.map(status =>
                                <Select.Option key={status} value={status}>
                                    {CurrentStatusListLabels[status]}
                                </Select.Option>
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item<IFormTodoPayload>
                        label="Deadline"
                        name="deadline"
                        rules={[{ required: true, message: 'Please input the deadline of the task' }]}
                    >
                        <DatePicker
                            format="YYYY-MM-DD HH:mm:ss"
                            showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Flex>
    )
}
