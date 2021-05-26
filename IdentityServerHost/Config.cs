// Copyright (c) Duende Software. All rights reserved.
// See LICENSE in the project root for license information.


using Duende.IdentityServer.Models;
using System.Collections.Generic;

namespace IdentityServerHost
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResources =>
            new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                new ApiScope("api", "Test API"),
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                new Client
                {
                    ClientId = "ReactClient",
                    ClientName="ReactClient",
                    ClientUri = "https://localhost:3000",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    RequireClientSecret = false,
                    RedirectUris = 
                    {
                        "https://localhost:3000/signin-oidc",
                    },
                    PostLogoutRedirectUris = 
                    {
                        "https://localhost:3000/signout-oidc",
                    },
                    AllowedScopes = 
                    {
                        "openid",
                        "profile",
                        "api",
                    },
                    AllowAccessTokensViaBrowser = true,
                }
            };
    }
}