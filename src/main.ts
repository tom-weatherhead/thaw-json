// thaw-json/src/main.ts

'use strict';

import { readFile, writeFile } from 'fs';

import { promisify } from 'util';

const promisifiedReadFile = promisify(readFile);
const promisifiedWriteFile = promisify(writeFile);

export async function readJsonFile(jsonFilePath: string): Promise<any> {
	const jsonDataAsString = await promisifiedReadFile(jsonFilePath, {
		encoding: 'utf8'
	});
	const jsonData: any = JSON.parse(jsonDataAsString);

	return jsonData;
}

export async function writeJsonFile(
	jsonFilePath: string,
	dataToWrite: any
): Promise<void> {
	const dataToWriteAsString = JSON.stringify(dataToWrite);

	await promisifiedWriteFile(jsonFilePath, dataToWrite, {
		encoding: 'utf8',
		flag: 'a', // 'a' means appending (old data will be preserved)
		mode: '0o644'
	});
}
