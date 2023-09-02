"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const PostCardNormal = ({ fixedHeight, fixedWidth, postInfo, handleImageClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className='p-2 cursor-pointer'
            onClick={() => handleImageClick(postInfo)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={{ position: 'relative' }}>
                <Image
                    style={{ height: fixedHeight, width: fixedWidth }}
                    className='object-cover rounded-md'
                    alt={`${postInfo.id}`}
                    src={postInfo.src}
                    height={500}
                    width={500}
                />
                {isHovered && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                            fontSize: '18px',
                        }}
                    >
                        View
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostCardNormal;
