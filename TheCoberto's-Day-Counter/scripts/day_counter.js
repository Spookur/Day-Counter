import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
    system.runInterval(() => {
        if (world.getTimeOfDay() == 0) {
            world.sendMessage("Day: " + world.getDay());
        }
    })
})