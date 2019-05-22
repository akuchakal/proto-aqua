import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from './demo/service/nodeservice';

const options = [
    {
        code: 'zhejiang',
        name: 'Zhejiang',
        children: [
            {
                code: 'hangzhou',
                name: 'Hangzhou',
                children: [
                    {
                        code: 'xihu',
                        name: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                code: 'ningbo',
                name: 'Ningbo',
                children: [
                    {
                        code: 'dongqianlake',
                        name: 'Dongqian Lake',
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        code: 'jiangsu',
        name: 'Jiangsu',
        children: [
            {
                code: 'nanjing',
                name: 'Nanjing',
                children: [
                    {
                        code: 'zhonghuamen',
                        name: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    filesTree12: TreeNode[];

    nzOptions = options;
    values: any[] | null = null;

    constructor(public app: AppComponent, private nodeService: NodeService) { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.nodeService.getFiles().then(files => this.filesTree12 = files);
    }

    onChanges(values: any): void {
        console.log(values, this.values);
    }

    validate(option: any, _index: number): boolean {
        const value = option.value;
        return ['hangzhou', 'xihu', 'nanjing', 'zhonghuamen'].indexOf(value) >= 0;
    }
}
