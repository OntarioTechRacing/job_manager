import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const props = { 
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const {status} = info.file;
        if( status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if(status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if(status === 'error') {
            message.error(`${info.file.name} file uploaded failed`);
        }
    },
    onDrop(e){
        console.log('Dropped files', e.dataransfer.files);
    },
};

function fileUpload() {
    return(
        <div>
            <h2>Upload Files</h2>
            <Dragger {...props}>
                <p className = "ant-upload-drag-icons">
                    <InboxOutlined />
                </p>
                <p className = "ant-upload-text">Click or drag files to this area to upload</p>
                <p className = "ant-upload-hint">
                    500 Mb max file size
                </p>
            </Dragger>
        </div>
    )
}

export default fileUpload;
