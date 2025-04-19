'use client';

import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";

interface ModalProps {
	type: 'default' | 'pin';
	imageSrc?: string;
	onClose: () => void;
}

const ModalComponent = ({ type, imageSrc, onClose }: ModalProps) => {
	const isPin = type === 'pin';

	return (
		<div
			className="fixed inset-0 bg-black/80 flex items-center justify-center"
			onClick={onClose}
		>
			<div
				className="w-[500px] h-auto bg-[#f5f5f5] dark:bg-[#101010] rounded-2xl flex flex-col items-center justify-center gap-5 text-center text-black dark:text-white p-8"
				onClick={(e) => e.stopPropagation()}
			>
				{isPin && imageSrc && (
					<Image
						src={imageSrc}
						alt=""
						width={40}
						height={40}
						className="object-cover"
					/>
				)}

				<div className="flex flex-col items-center gap-2">
					<h2 className="text-3xl font-black">
						{isPin
							? 'Зарегестрируйтесь, чтобы размещать публикации'
							: 'Попробуйте Threads'}
					</h2>
					<p className="text-[#777777] text-sm">
						Присоединяйтесь к Threads, чтобы делиться <br /> мыслями, быть в курсе событий, подписываться <br /> на знакомых и делать многое другое.
					</p>
				</div>

				<button className="flex items-center gap-3 font-semibold bg-white dark:bg-[#101010] border rounded-2xl px-6 py-4 text-sm cursor-pointer">
					<img src="/InstagramLogo.png" alt="" className="w-10" />
					Продолжить с аккаунтом Instagram
					<MdKeyboardArrowRight size={24} className="text-[#777777]"/>
				</button>
			</div>
		</div>
	);
};

export default ModalComponent;