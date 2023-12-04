import { system } from "@minecraft/server";
system.beforeEvents.watchdogTerminate.subscribe((data) => data.cancel = true);
import "./day_counter.js";