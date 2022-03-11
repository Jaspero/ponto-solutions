import {PROCESSED} from '../pages/processed.const';
import {JSX, Module} from '../shared/module.type';

export const LAYOUT_MODULE: Module = {
	id: 'settings',
	name: 'WEBSITE.LAYOUT.LAYOUT',
	authorization: {
		write: ['admin']
	},
	layout: {
		directLink: 'layout',
		instance: {
			segments: [
				{
					title: 'WEBSITE.LAYOUT.HEADER_NAVIGATION',
					array: '/headerLinks',
					fields: ['/link', '/label', '/image', '/theme'],
					columnsDesktop: 12
				},
				{
					type: 'empty',
					fields: ['/blocks']
				}
			]
		}
	},
	schema: {
		properties: {
			id: {type: 'string'},
			headerLinks: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						link: {type: 'string'},
						label: {type: 'string'},
						image: {type: 'string'},
						theme: {type: 'string'}
					}
				}
			},
			blocks: {type: 'array'},
		}
	},
	definitions: {
		'headerLinks/link': {
			label: 'GENERAL.LINK',
			columnsDesktop: 3
		},
		'headerLinks/label': {
			label: 'GENERAL.LABEL',
			columnsDesktop: 3
		},
		'headerLinks/theme': {
			label: 'Theme',
			columnsDesktop: 3,
			component: {
				type: 'select',
				configuration: {
					dataSet: [
						{name: 'Light', value: 'light'},
						{name: 'Dark', value: 'dark'},
						{name: 'Accent', value: 'accent'}
					]
				}
			}
		},
		'headerLinks/image': {
			label: 'Image',
			columnsDesktop: 3,
			component: {
				type: 'image',
				configuration: {
					uploadMethods: [{
						id: 'file-manager',
						label: 'FILE_MANAGER.TITLE',
						component: JSX(<jms-e-file-manager-select/>),
						configuration: {
							hidePath: false,
							hideFolders: false,
							allowUpload: true,
							route: '/public',
							filters: [{
								value: file => file.contentType.startsWith('image/')
							}]
						}
					}],
					generatedImages: [{
						width: 160,
						height: 80
					}]
				}
			}
		},
		blocks: {
      component: {
        type: 'pb-blocks',
        configuration: {
          styles: PROCESSED.css,
          styleUrls: [],
          intro:  `<p><b>Footer Segments</b><br>Edit segments attached to the footer of the website.</p>`
        }
      }
    }
	}
}