import { IDatabase } from "../types.js";
import { Low } from "lowdb";
import { Interaction, TextChannel } from "discord.js";

export default {
	name: "interactionCreate",
	execute(db: Low<IDatabase>, interaction: Interaction) {
		console.log(`${interaction.user.tag} in #${(interaction.channel as TextChannel).name} triggered an interaction.`);
	},
};
