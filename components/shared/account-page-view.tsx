"use client";

import { useMemo, useState } from "react";
import { downloads } from "@/lib/data";
import { Button } from "@/components/shared/button";
import { Badge } from "@/components/shared/badge";
import type { ProductCategory } from "@/lib/types";

type TabKey = "profile" | "downloads" | "history" | "licenses" | "settings";

const tabs: { key: TabKey; label: string }[] = [
  { key: "profile", label: "Profile" },
  { key: "downloads", label: "My Downloads" },
  { key: "history", label: "Purchase History" },
  { key: "licenses", label: "Licenses" },
  { key: "settings", label: "Settings" }
];

export function AccountPageView() {
  const [activeTab, setActiveTab] = useState<TabKey>("downloads");
  const [categoryFilter, setCategoryFilter] = useState<ProductCategory | "all">("all");

  const filteredDownloads = useMemo(() => {
    if (categoryFilter === "all") return downloads;
    return downloads.filter((item) => item.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <section className="section-gap">
      <div className="container-shell">
        <h1 className="font-display text-5xl font-bold tracking-tight">Account Dashboard</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="card-frame h-fit p-3">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`focus-ring w-full rounded-lg px-3 py-2 text-left text-sm ${activeTab === tab.key ? "bg-accent text-white" : "text-text-secondary hover:bg-surface-elevated"}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="card-frame p-5">
            {activeTab === "downloads" && (
              <section>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-display text-3xl font-bold">My Downloads</h2>
                  <select
                    value={categoryFilter}
                    onChange={(event) => setCategoryFilter(event.target.value as ProductCategory | "all")}
                    className="focus-ring h-10 rounded-[10px] border border-border bg-surface-elevated px-3 text-sm"
                  >
                    <option value="all">All categories</option>
                    <option value="website-templates">Website templates</option>
                    <option value="ui-kits">UI kits</option>
                    <option value="figma-templates">Figma templates</option>
                    <option value="graphics">Graphics</option>
                    <option value="illustrations">Illustrations</option>
                  </select>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {filteredDownloads.map((item) => (
                    <article key={item.id} className="rounded-xl border border-border bg-surface p-4">
                      <div
                        className="mb-3 h-28 rounded-lg border border-border"
                        style={{
                          background: `linear-gradient(130deg, ${item.accentFrom}, ${item.accentTo})`
                        }}
                      />
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-sm text-text-secondary">Version {item.version}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge>{item.format}</Badge>
                        <Badge>{item.category.replace("-", " ")}</Badge>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm">Download</Button>
                        <Button size="sm" variant="secondary">
                          View License
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {activeTab === "history" && (
              <section>
                <h2 className="font-display text-3xl font-bold">Purchase History</h2>
                <div className="mt-4 overflow-hidden rounded-xl border border-border">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-surface-elevated text-text-secondary">
                      <tr>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Product</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3">2026-03-19</td>
                        <td className="px-4 py-3">Nova Dashboard UI Kit</td>
                        <td className="px-4 py-3">$49</td>
                        <td className="px-4 py-3 text-accent">Download PDF</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3">2026-02-11</td>
                        <td className="px-4 py-3">Arcfolio Portfolio Template</td>
                        <td className="px-4 py-3">$39</td>
                        <td className="px-4 py-3 text-accent">Download PDF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {activeTab === "profile" && (
              <section>
                <h2 className="font-display text-3xl font-bold">Profile</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" defaultValue="Aarav Mehta" />
                  <Field label="Email" defaultValue="aarav@example.com" type="email" />
                  <Field label="Password" defaultValue="********" type="password" />
                  <Field label="Confirm Password" defaultValue="********" type="password" />
                </div>
                <Button className="mt-5">Save Changes</Button>
              </section>
            )}

            {activeTab === "licenses" && (
              <section>
                <h2 className="font-display text-3xl font-bold">Licenses</h2>
                <p className="mt-3 max-w-2xl text-sm text-text-secondary">
                  All purchased products include personal or commercial usage based on item type. For client transfer or white-label scenarios, contact support for extended licensing.
                </p>
              </section>
            )}

            {activeTab === "settings" && (
              <section>
                <h2 className="font-display text-3xl font-bold">Settings</h2>
                <div className="mt-4 space-y-3">
                  <label className="flex items-center gap-2 text-sm text-text-secondary">
                    <input type="checkbox" defaultChecked className="h-4 w-4 accent-accent" />
                    New product drop notifications
                  </label>
                  <label className="flex items-center gap-2 text-sm text-text-secondary">
                    <input type="checkbox" className="h-4 w-4 accent-accent" />
                    Promotional offers and bundle alerts
                  </label>
                </div>
                <Button className="mt-5">Update Preferences</Button>
              </section>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}

function Field({ label, defaultValue, type = "text" }: { label: string; defaultValue: string; type?: string }) {
  return (
    <label>
      <span className="mb-1 block text-sm text-text-secondary">{label}</span>
      <input
        defaultValue={defaultValue}
        type={type}
        className="focus-ring h-11 w-full rounded-[10px] border border-border bg-surface-elevated px-3 text-sm"
      />
    </label>
  );
}
