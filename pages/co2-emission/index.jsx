import { MantineProvider } from "@mantine/core";
import PerVisit from "./PerVisit";
import Host from "./Host";

export default function Co2Emission() {
    return (
        <MantineProvider>
            {/* <Host /> */}
            <PerVisit />
        </MantineProvider>
    );
}