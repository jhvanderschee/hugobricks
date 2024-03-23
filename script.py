import csv
import os

# ------------------ Configuration  ------------------
csv_file = "song.csv"
output_base_directory = "content/en/docs/gord-downie/"  

# ------------------  Main Script ------------------
with open(csv_file, 'r', encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)

    for row in reader:
        song_title = row['Song Title'].strip()
        album_name = row['Album'].strip()
        output_directory = os.path.join(output_base_directory, album_name)

        # Create the album directory if it doesn't exist
        os.makedirs(output_directory, exist_ok=True)

        file_name = song_title + ".txt"
        file_path = os.path.join(output_directory, file_name)

        # Create and write to the text file
        with open(file_path, 'w', encoding="utf-8") as txt_file:
            txt_file.write("---\n")
            txt_file.write(f"Title: \"{song_title}\"\n")
            txt_file.write("---\n\n")

            txt_file.write("Summary \n")  # Placeholder for now
            txt_file.write("{{< TAGS >}}\n\n")  

            txt_file.write("# Lyrics\n")
            txt_file.write(f"\"{row['Lyrics']}\"\n\n")  

            txt_file.write("# Summary\n")
            txt_file.write(f"\"{row['Summary']}\"\n\n") 

            txt_file.write("# References\n")
            txt_file.write("Coming soon\n")
