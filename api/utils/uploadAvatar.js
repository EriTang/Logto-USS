// Copyright (c) 2024 t2vee. All rights reserved.
// Use of this source code is governed by an MPL license.


import crypto from "node:crypto";

export default async function (env, accessToken, imageData, userId) {
	const url = `${env.LOGTO_DOMAIN}/api/user-assets`;
	const uploadFormData = new FormData();
	uploadFormData.append('file', imageData);
	uploadFormData.set("file", imageData, `${crypto.randomUUID()}__${userId}__${Date.now()}.webp`);
	const headers = {
		'Authorization': `Bearer ${accessToken}`,
	};
	const response = await fetch(url,
		{
			method: 'POST',
			headers,
			body: uploadFormData
		});
	const res = await response.clone().json();
	if (!response.ok) {
		console.error('Error accessing resource:', res);
		return false;
	}
	return await response.json();
}
