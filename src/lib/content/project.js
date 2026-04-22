export default class Project {
	static async all() {
		const projects = await Promise.all(
			Object.entries(import.meta.glob("./projects/**/*.md")).map(async ([path, resolver]) => {
				const { metadata: data } = await resolver()
				const slug = path.split("/").pop().slice(0, -3)
				return { slug, data }
			})
		)

		return projects.sort((a, b) => {
			const yearA = a.data.year;
			const yearB = b.data.year;

			if (yearA > yearB) return -1;
			if (yearA < yearB) return 1;

			const titleA = a.data.title.toUpperCase();
			const titleB = b.data.title.toUpperCase();

			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;

			return 0;
		})
	}

	static async byYear() {
		const projects = await this.all();
		const result = [];

		for (const project of projects) {
			const year = project.data.year;
			let group = result.find(g => g.number === year);
			if (!group) {
				group = { number: year, projects: [] };
				result.push(group);
			}
			group.projects.push(project);
		}

		return result;
	}
}
