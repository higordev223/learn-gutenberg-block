import { __ } from "@wordpress/i18n";
import metadata from "../block.json";
import {
	ColorPalette,
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";

export const BottomCurveSettings = ({ attributes, setAttributes }) => {
	return (
		<>
			<HorizontalRule /> {/*Seperate toggle button and width, height radio*/}
			<RangeControl
				min={100}
				max={300}
				value={attributes.bottomWidth || 100}
				onChange={(newValue) => {
					setAttributes({
						bottomWidth: parseInt(newValue),
					});
				}}
				label={__("Width", metadata.textdomain)}
			/>
			<RangeControl
				min={0}
				max={200}
				value={attributes.bottomHeight}
				onChange={(newValue) => {
					setAttributes({
						bottomHeight: parseInt(newValue),
					});
				}}
				label={__("Height", metadata.textdomain)}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => {
						setAttributes({
							bottomFlipX: isChecked,
						});
					}}
					checked={attributes.bottomFlipX}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => {
						setAttributes({
							bottomFlipY: isChecked,
						});
					}}
					checked={attributes.bottomFlipY}
				/>
				<span>{__("Flip vertically", metadata.textdomain)}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve Color", metadata.textdomain)}</label>
				<ColorPalette
					// disableCustomColors
					// colors={[
					// 	{ name: "red", color: "#f00" },
					// 	{ name: "white", color: "#fff" },
					// 	{ name: "blue", color: "#00f" },
					// ]}
					value={attributes.bottomColor}
					onChange={(newValue) => {
						setAttributes({
							bottomColor: newValue,
						});
					}}
				/>
			</div>
		</>
	);
};
