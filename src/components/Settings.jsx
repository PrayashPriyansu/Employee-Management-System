import { SettingsIcon } from "lucide-react";

function Settings() {
  return (
    <div className="flex items-center flex-1 gap-2 ">
      <SettingsIcon className="stroke-1" />
      <span>Settings</span>
    </div>
  );
}

export default Settings;
