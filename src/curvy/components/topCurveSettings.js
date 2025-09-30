import { __ } from "@wordpress/i18n";
import metadata from "../block.json";
import {
	ColorPalette,
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";

export const TopCurveSettings = ({ attributes, setAttributes }) => {
	return (
		<>
			<HorizontalRule /> {/*Seperate toggle button and width, height radio*/}
			<RangeControl
				min={100}
				max={300}
				value={attributes.topWidth || 100}
				onChange={(newValue) => {
					setAttributes({
						topWidth: parseInt(newValue),
					});
				}}
				label={__("Width", metadata.textdomain)}
			/>
			<RangeControl
				min={0}
				max={200}
				value={attributes.topHeight}
				onChange={(newValue) => {
					setAttributes({
						topHeight: parseInt(newValue),
					});
				}}
				label={__("Height", metadata.textdomain)}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => {
						setAttributes({
							topFlipX: isChecked,
						});
					}}
					checked={attributes.topFlipX}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => {
						setAttributes({
							topFlipY: isChecked,
						});
					}}
					checked={attributes.topFlipY}
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
					value={attributes.topColor}
					onChange={(newValue) => {
						setAttributes({
							topColor: newValue,
						});
					}}
				/>
			</div>
		</>
	);
};
