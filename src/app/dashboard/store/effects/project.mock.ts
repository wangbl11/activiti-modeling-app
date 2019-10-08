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

import { Project, PROJECT, ReleaseEntry, Pagination } from 'ama-sdk';

export const mockProject: Project = {
    id: 'app-id',
    name: 'app-name',
    description: 'description',
    version: '0.0.1',
    type: PROJECT,
    createdBy: 'user',
    creationDate: new Date(),
    lastModifiedBy: 'user',
    lastModifiedDate: new Date()
};

export const mockReleaseEntry: ReleaseEntry = {
    entry: {
        id: 'release-id',
        name: '1',
        createdBy: 'user',
        creationDate: new Date(),
        projectName: 'app-name',
        lastModifiedBy: 'user',
        lastModifiedDate: new Date()
    }
};

export const paginationMock: Pagination = {
    count: 1,
    hasMoreItems: false,
    maxItems: 25,
    skipCount: 0,
    totalItems: 1
};
