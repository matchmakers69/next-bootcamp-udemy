import { styled } from "@mui/material/styles";
import { Dialog as MUIDialog, DialogTitle as MUIDialogTitle } from "@mui/material";

export const BootstrapDialogContent = styled(MUIDialog, {
	name: "MuiCustomModal",
	slot: "MuiCustomModal",
	skipSx: true,
})((props) => ({
	"& .MuiPaper-root": {
		minWidth: 588,
	},
	"& .MuiDialogContent-root": {
		padding: props.theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: props.theme.spacing(1),
	},
}));

export const ModalTitle = styled(MUIDialogTitle, {
	name: "MuiCustomModalTitle",
	slot: "MuiCustomModalTitle",
	skipSx: true,
})((props) => ({
	margin: 0,
	padding: props.theme.spacing(2),
}));
