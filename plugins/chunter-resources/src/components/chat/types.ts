//
// Copyright © 2023 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
import { type Asset, type IntlString } from '@hcengineering/platform'
import { type DocumentQuery } from '@hcengineering/core'
import { type DocNotifyContext } from '@hcengineering/notification'
import { type ViewAction } from '@hcengineering/view'
import { type AnyComponent } from '@hcengineering/ui'

export interface ChatNavGroupModel {
  id: string
  label?: IntlString
  addLabel?: IntlString
  addComponent?: AnyComponent
  query?: DocumentQuery<DocNotifyContext>
  hideEmpty?: boolean
  actions?: Array<{
    icon: Asset
    label: IntlString
    action: ViewAction
  }>
}