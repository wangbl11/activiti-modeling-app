/*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable } from '@angular/core';
import { arrayize } from '../../helpers/utils/arrayize';

@Injectable({
    providedIn: 'root'
})
export class CodeEditorService {

    private schemas = [];

    addSchema(uri: string, fileMatch: string | string[], schema: string | Object) {
        this.schemas.push({
            uri,
            fileMatch: arrayize(fileMatch),
            schema
        });
    }

    getConfig() {
        return {
            baseUrl: './assets',
            onMonacoLoad: this.onMonacoLoad.bind(this)
        };
    }

    private onMonacoLoad() {
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: this.schemas
        });
    }
}
