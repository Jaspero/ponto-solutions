import JSX from '../../utils/jsx.compiler';

export const IMAGE_DEFINITION = {
	component: {
		type: 'image',
		configuration: {
			filePrefix: '/public/assets/',
			uploadMethods: [{
				id: 'file-manager',
				label: 'FILE_MANAGER.TITLE',
				component: JSX(<jms-e-file-manager-select/>),
				configuration: {
					route: '/public/assets',
					hidePath: false,
					filters: [{
						value: file => file.contentType.startsWith('image/')
					}]
				}
			}]
		}
	}
};