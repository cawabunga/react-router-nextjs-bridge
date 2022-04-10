import { expect, test } from "@playwright/test";

test("should navigate to Foo Page", async ({ page, baseURL }) => {
  await page.goto(baseURL + "/");

  await Promise.all([
    page.waitForNavigation({ url: baseURL + "/foo" }),
    page.locator("text=Foo").click(),
  ]);

  await expect(page.locator("body")).toContainText("I am Foo Page");
});
