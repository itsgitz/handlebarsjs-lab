import { readFileSync } from "fs";
import { join } from "path";
import Handlebars from "handlebars";

async function main() {
  try {
    const bodyTemplate = readFileSync(join(__dirname, "template.html"), "utf8");
    const partial = readFileSync(join(__dirname, "partial.html"), "utf8");

    Handlebars.registerPartial("meeting", partial);
    const template = Handlebars.compile(bodyTemplate);
    console.log(
      template({
        username: "Anggit M Ginanjar",
        programName: "SSCS Program",
        requesterOrganizationName: "PT Infinys System Indonesia",
        url: "https://www.infinyscloud.com",
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

main();
