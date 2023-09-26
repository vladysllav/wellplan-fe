import React, { useRef, useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import default_avatar from '../../assets/images/default_avatar.png';

interface AvatarEditorProps {
    srcIcon?: string;
    onImageUpload: (image: string) => void;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const AvatarEditor: React.FC<AvatarEditorProps> = ({ srcIcon, onImageUpload }) => {
    const [avatar, setAvatar] = useState(srcIcon || default_avatar);
    const [hovered, setHovered] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target?.files?.[0];
        if (selectedImage) {
            if (!ALLOWED_FILE_TYPES.includes(selectedImage.type)) {
                toast.error("Accepted formats: JPEG, JPG and PNG.");
                return;
            }
            if (selectedImage.size > MAX_FILE_SIZE) {
                toast.error("The file is too large. Maximum size: 2MB.");
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const uploadedImage = e.target?.result as string;
                setAvatar(uploadedImage);
                onImageUpload(uploadedImage);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    return (
        <div className="relative"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <img
                src={avatar}
                alt="avatar"
                className="w-43 h-auto h-40 md:h-45 lg:h-48 rounded-full cursor-pointer"
                onClick={() => inputRef.current?.click()}
            />
            {hovered && (
                <div className="max-w-full h-auto max-h-40 md:max-h-45 lg:max-h-48 rounded-full absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 cursor-pointer">
                    <label htmlFor="imageInput" className="text-white">
                        Change avatar
                    </label>
                    <input
                        type="file"
                        id="imageInput"
                        accept=".jpg, .jpeg, .png"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </div>
            )}
        </div>
    );
};

export default AvatarEditor;
