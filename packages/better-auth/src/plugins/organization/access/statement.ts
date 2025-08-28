import { createAccessControl } from "../../access";

export const defaultStatements = {
	organization: ["update", "delete"],
	member: ["create", "update", "delete"],
	invitation: ["create", "cancel"],
	team: ["create", "update", "delete"],
	teamMember: ["add", "remove", "list"],
} as const;

export const defaultAc = createAccessControl(defaultStatements);

export const adminAc = defaultAc.newRole({
	organization: ["update"],
	invitation: ["create", "cancel"],
	member: ["create", "update", "delete"],
	team: ["create", "update", "delete"],
});

export const ownerAc = defaultAc.newRole({
	organization: ["update", "delete"],
	member: ["create", "update", "delete"],
	invitation: ["create", "cancel"],
	team: ["create", "update", "delete"],
});

export const memberAc = defaultAc.newRole({
	organization: [],
	member: [],
	invitation: [],
	team: [],
	teamMember: ["list"],
});

export const teamOwnerAc = defaultAc.newRole({
	team: ["update", "delete"],
	teamMember: ["add", "remove", "list"],
});

export const teamAdminAc = defaultAc.newRole({
	team: ["update"],
	teamMember: ["add", "remove", "list"],
});

export const teamMemberAc = defaultAc.newRole({
	teamMember: ["list"],
});

export const defaultRoles = {
	admin: adminAc,
	owner: ownerAc,
	member: memberAc,
	team_owner: teamOwnerAc,
	team_admin: teamAdminAc,
	team_member: teamMemberAc,
};
