import React, { FC, useState } from 'react'
import { IFormTodoPayload, ITodo } from '@/interfaces/todo'
import { Card, Input, Select, DatePicker, Form, FormProps } from 'antd'
import { EditOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useEditTask } from '@/hooks/useEditTask'
import Meta from 'antd/es/card/Meta'
import { RemoveTask } from '../../RemoveTask'
import { PriorityList, PriorityListLabels } from '@/constants/priority'
import { CurrentStatusList, CurrentStatusListLabels } from '@/constants/status'
import dayjs from 'dayjs'

interface Props {
    task: ITodo
}

export const Element: FC<Props> = ({ task }) => {
    const [isEdit, setIsEdit] = useState(false)
    const {
        onMarkCompleted,
        onEdit
    } = useEditTask(task._id)

    const [form] = Form.useForm<IFormTodoPayload>();

    const onFinish: FormProps<IFormTodoPayload>['onFinish'] = (values) => {
        onEdit({ ...values })
        setIsEdit(false)
    };

    const onFinishFailed: FormProps<IFormTodoPayload>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card style={{ minWidth: 240 }}
            actions={[
                <CheckCircleOutlined key="complete" onClick={() => onMarkCompleted(task)} />,
                <RemoveTask key="remove" id={task._id} />,
                <>
                    {isEdit ?
                        <CheckCircleOutlined key="editDone"
                            style={{ color: '#73d13d' }}
                            onClick={() => form.submit()} />
                        :
                        <EditOutlined key="editSet" onClick={() => setIsEdit(true)} />
                    }
                </>
            ]} >
            {!isEdit ?
                <Meta
                    avatar={
                        <CheckCircleOutlined
                            style={{ fontSize: '48px', color: task.currentStatus === "done" ? "#73d13d" : undefined }}
                        />}
                    title={task.content}
                    description={"Due date: " + dayjs(task.deadline).format('DD/MM/YYYY')}
                />
                :
                <Form<IFormTodoPayload>
                    form={form}
                    style={{ marginTop: '24px' }}
                    initialValues={{ ...task, deadline: dayjs(task.deadline) }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<IFormTodoPayload>
                        name="content"
                        rules={[{ required: true, message: 'Please add a description' }]}
                    >
                        <Input
                            placeholder="Task description"
                            prefix={<EditOutlined />}
                        />
                    </Form.Item>
                    <Form.Item<IFormTodoPayload>
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
                        name="deadline"
                        rules={[{ required: true, message: 'Please input the deadline of the task' }]}
                    >
                        <DatePicker
                            format="YYYY-MM-DD HH:mm:ss"
                            showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
                        />
                    </Form.Item>
                </Form>
            }
        </Card>
    )
}
