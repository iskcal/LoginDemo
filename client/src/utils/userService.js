// Copyright 2021 iskcal
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { UserManager } from 'oidc-client';

const config = {
    authority: "https://localhost:5001",
    client_id: "ReactClient",
    redirect_uri: "https://localhost:3000/signin-oidc",
    response_type: "id_token token",
    scope: "openid profile api",
    post_logout_redirect_uri: "https://localhost:3000/signout-oidc",
};

const userManager = new UserManager(config);

export default userManager;