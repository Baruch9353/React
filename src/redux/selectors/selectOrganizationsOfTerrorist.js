import { createSelector } from "@reduxjs/toolkit";

const selectOrganizationsList = (state) => state.organizations.organizationsList;
const selectTerroristsList = (state) => state.terrorists.terroristsList;

export const selectTerroristsWithOrgs = createSelector(
    [selectTerroristsList, selectOrganizationsList],
    (terrorists, organizations) =>
        terrorists.map((ter) => {
            const organizationOfTerrorist = organizations.find(
                (org) => org.id === ter.idOfOrganization
            );

            return {
                ...ter,
                organizationName: organizationOfTerrorist ? organizationOfTerrorist.name : null,
            };
        })
);
