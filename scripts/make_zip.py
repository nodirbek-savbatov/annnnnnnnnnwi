import os
import zipfile

def create_project_zip(output_filename="xauusd-trading-academy.zip"):
    ignore_dirs = {"node_modules", "dist", ".git", ".cache", "__pycache__"}
    ignore_files = {output_filename, "package-lock.json.bak"}

    root_dir = "."
    zip_root = "xauusd-trading-academy"

    with zipfile.ZipFile(output_filename, "w", zipfile.ZIP_DEFLATED) as zipf:
        for dirpath, dirnames, filenames in os.walk(root_dir):
            # Prune ignored directories in-place
            dirnames[:] = [d for d in dirnames if d not in ignore_dirs and not d.startswith(".")]

            for file in filenames:
                if file in ignore_files or file.endswith(".zip") or file.endswith(".tar.gz"):
                    continue

                full_path = os.path.join(dirpath, file)
                rel_path = os.path.relpath(full_path, root_dir)
                archive_path = os.path.join(zip_root, rel_path)
                zipf.write(full_path, archive_path)

    print(f"ZIP successfully created: {output_filename} ({os.path.getsize(output_filename)} bytes)")

if __name__ == "__main__":
    create_project_zip()
