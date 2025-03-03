/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * @module helpers/size
 */

import type { Nullable } from 'jodit/types';
import { globalDocument } from 'jodit/core/constants';
import { Dom } from 'jodit/core/dom/dom';
import { css } from 'jodit/core/helpers/utils';

export function getScrollParent(node: Nullable<Node>): Nullable<Element> {
	if (!node) {
		return null;
	}

	const isElement = Dom.isHTMLElement(node);
	const overflowY = isElement && css(node, 'overflowY');
	const isScrollable =
		isElement && overflowY !== 'visible' && overflowY !== 'hidden';

	if (isScrollable && node.scrollHeight >= node.clientHeight) {
		return node;
	}

	return (
		getScrollParent(node.parentNode) ||
		globalDocument.scrollingElement ||
		globalDocument.body
	);
}
