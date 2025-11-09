import { createSelector } from "@reduxjs/toolkit";

const selectOrganizationsList = (state) => state.organizations.organizationsList;
const selectTerroristsList = (state) => state.terrorists.terroristsList;

export const selectOrganizationsWithTerrorists = createSelector(
    [selectOrganizationsList, selectTerroristsList],
    (organizations, terrorists) =>
        organizations.map((org) => {
            const terroristsInOrg = terrorists.filter((ter) =>
                ter.idOfOrganization === org.id
            );
            return {
                ...org,
                terroristsList: terroristsInOrg,
                terroristsCount: terroristsInOrg.length,
            }
        })
);
