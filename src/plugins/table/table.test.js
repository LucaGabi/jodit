/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

describe('Test table plugin', () => {
	describe('Click button and click to some cell', () => {
		it('should create and insert new table', () => {
			const editor = getJodit();
			clickButton('table', editor);
			const popup = getOpenedPopup(editor);
			simulateEvent(
				'mousedown',
				popup.querySelector('span[data-index="6"]')
			);
			expect(sortAttributes(editor.value).replace(/[\n\t]/g, '')).eq(
				'<table style="border-collapse:collapse;width:100%">' +
					'<tbody>' +
					'<tr>' +
					'<td style="width:14.28%"><br></td>' +
					'<td style="width:14.28%"><br></td>' +
					'<td style="width:14.28%"><br></td>' +
					'<td style="width:14.28%"><br></td>' +
					'<td style="width:14.28%"><br></td>' +
					'<td style="width:14.28%"><br></td>' +
					'<td style="width:14.28%"><br></td>' +
					'</tr>' +
					'</tbody></table>'
			);
			expect(editor.editor.firstChild.nodeName).eq('TABLE');
		});
	});

	describe('Set different cell style', () => {
		it('should create cells with that style', () => {
			const editor = getJodit({
				createAttributes: {
					td: {
						style: 'color: red;'
					}
				}
			});
			clickButton('table', editor);
			const popup = getOpenedPopup(editor);
			simulateEvent(
				'mousedown',
				popup.querySelector('span[data-index="2"]')
			);
			expect(sortAttributes(editor.value)).eq(
				'<table style="border-collapse:collapse;width:100%"><tbody>\n<tr>\n\t<td style="color:red;width:33.33%"><br></td>\n\t<td style="color:red;width:33.33%"><br></td>\n\t<td style="color:red;width:33.33%"><br></td></tr></tbody></table>'
			);
		});
	});
});
