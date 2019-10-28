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
import { Observable } from 'rxjs';
import { Project, Release, Pagination, PaginatedEntries, ReleaseEntry, ServerSideSorting } from './types';

@Injectable()
export abstract class ProjectApi {
    public abstract create(project: Partial<Project>): Observable<Project>;
    public abstract get(projectId: string): Observable<Project>;
    public abstract update(projectId: string, project: Partial<Project>): Observable<Project>;
    public abstract delete(projectId: string): Observable<void>;

    public abstract import(file: File):  Observable<any>;
    public abstract export(projectId: string): Observable<Blob>;
    public abstract getAll(fetchQueries?: FetchQueries, sorting?: ServerSideSorting): Observable<PaginatedEntries<Project>>;
    public abstract release(projectId: string): Observable<Release>;
    public abstract getProjectReleases(projectId: string, pagination?: Partial<Pagination>): Observable<PaginatedEntries<ReleaseEntry>>;
}

export interface FetchQueries {
    skipCount?: number;
    maxItems?: number;
}
