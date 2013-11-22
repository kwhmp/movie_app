import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;


public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		File file = new File("all_time.csv");
		BufferedReader reader = new BufferedReader(new FileReader(file));
		String text = null;
		String out = "\"";
		int linecount = 1;
		while ((text = reader.readLine()) != null) {
//			for (int i = 0; i < 2; i++) {
//				System.out.println(text);
//				int index = text.indexOf('$');
//				if (text.charAt(index+2) == ',') {
//					String sub = text.substring(0, index+2);
//					text = sub + text.substring(index+3, text.length());
//				}
//			}
			text = "\"" + linecount + "\"," + text;
			linecount++;
			text = text.replace("$", "");
			text = text.replaceAll("%", "");
			System.out.println(text);
//			System.out.println(text);
//			String[] texts = text.split(">");
//			String[] output = null;
//			String t = "";
//			if (texts.length > 1 && texts.length%2 == 0) {
//				String temp = texts[texts.length/2];
//				output = temp.split("<");
//				t = output[0];
//			}
//			if (linecount == 12) {
//				out = out.substring(0, out.length()-2);
//				System.out.println(out);
//				out = "\"";
//				linecount = 0;
//			}
//			else if (linecount > 1 && linecount < 11) {
//				out += t;
//				out += "\",\"";
//			}
//			linecount++;
	    }
	}

}
