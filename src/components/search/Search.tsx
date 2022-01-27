import { Form, Input } from 'antd';
import React from 'react';
import IconSearch from '../icons/IconSearch';
interface Props{
    search:string,
    setSearch:React.Dispatch<React.SetStateAction<string>>
    children:string,
    background:string
}
const Search = (props: Props) => {
    const { search, setSearch,children,background } = props;
    const onFinish = (values: any) => {
        setSearch(values.search);
    };

    const onFinishFailed = (errorInfo: any) => {
        setSearch('');
    };
    return (
        <Form
            className="search"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                name="search"
                rules={[{ required: true, message: 'Nhập nội dung tìm kiếm' }]}
            >
                <Input
                    placeholder={children}
                    value={search}
                    style={{ background: background }}
                />
            </Form.Item>
            <button type="submit">
                {' '}
                <IconSearch />
            </button>
        </Form>
    );
};

export default Search;
