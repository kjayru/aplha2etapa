//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"development";
NSString * const TI_APPLICATION_ID = @"com.phonegap.alphareto";
NSString * const TI_APPLICATION_PUBLISHER = @"Wile";
NSString * const TI_APPLICATION_URL = @"http://productosalpha.com.pe";
NSString * const TI_APPLICATION_NAME = @"Alpha2014";
NSString * const TI_APPLICATION_VERSION = @"2.0";
NSString * const TI_APPLICATION_DESCRIPTION = @"Ingresa al desafío Alpha y concursa para ganar grandes premios.";
NSString * const TI_APPLICATION_COPYRIGHT = @"2014 by Havas";
NSString * const TI_APPLICATION_GUID = @"3c5436dc-2e88-4b73-a1c2-732ca6e10c44";
BOOL const TI_APPLICATION_ANALYTICS = true;

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

#ifdef __LOG__ID__
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsDirectory = [paths objectAtIndex:0];
	NSString *logPath = [documentsDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"%s.log",STRING(__LOG__ID__)]];
	freopen([logPath cStringUsingEncoding:NSUTF8StringEncoding],"w+",stderr);
	fprintf(stderr,"[INFO] Application started\n");
#endif

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
