import { type ReactNode } from "react";
import { Button, DialogActions, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as S from "./Modal.styled";

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
	open: boolean;
	title: string;
}

function Modal({ children, open, onClose = () => undefined, title = "" }: ModalProps) {
	return (
		<>
			<S.BootstrapDialogContent onClose={onClose} aria-labelledby="modal-content" open={open}>
				<S.ModalTitle id="modal-title">{title}</S.ModalTitle>

				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers>{children}</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={onClose}>
						Close
					</Button>
				</DialogActions>
			</S.BootstrapDialogContent>
		</>
	);
}

export { Modal };
